package com.richneighborhoods0420.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@CrossOrigin
@RequestMapping("api/member")
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;
    
    @Autowired
    private TransactionRepository transactionRepository;
    
    public long idLimit = 1000;
    public double membershipFee = 20.0;

    @GetMapping
    public Iterable<Member> findAllMembers() { return memberRepository.findAll(); }

    @GetMapping("/{id}")
    public Member findMemberById(@PathVariable long id) {
        return memberRepository.findById(id).orElseThrow();
    }

    @PostMapping
    public Member createMember(@Validated @RequestBody Member member) {
        return memberRepository.save(member);
    }
 
    @PutMapping("/{id}")
    public Member activateMember(@PathVariable long id) {
        Member updatedMember = memberRepository.findById(id)
                .map(member -> {
                    member.setExpiryDate(LocalDate.now().plusMonths(1).toString());
                    // update transaction list with member's payments
                    Transaction transaction = new Transaction(member.getId() + idLimit, // Arbitrary Number, max before id's get overwritten
                    										LocalDate.now().toString(),
                    										"Membership Fee for " + member.getName(), 
                    										membershipFee); // Monthly membership fee, MAGIC NUMBER
                    transactionRepository.save(transaction);
                    
                    return memberRepository.save(member);
                })
                .orElseGet(() -> {
                    return null;
                });

        return updatedMember;
    }

    // no need to delete member, but here it is anyway
    @DeleteMapping("/{id}")
    public void deleteMember(@PathVariable long id) {
        memberRepository.deleteById(id);
    }
}
