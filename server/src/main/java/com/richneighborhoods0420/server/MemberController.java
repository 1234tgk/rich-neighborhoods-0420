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
    
    @PutMapping
    public void updateMember(@Validated @RequestBody Member member) {
    	memberRepository.save(member);
    }

    @PutMapping("/{id}")
    public Member activateMember(@PathVariable long id) {
        Member updatedMember = memberRepository.findById(id)
                .map(member -> {
                    member.setExpiryDate(LocalDate.now().plusMonths(1).toString());
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
