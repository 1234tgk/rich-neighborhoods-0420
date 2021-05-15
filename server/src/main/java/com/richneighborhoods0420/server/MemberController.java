package com.richneighborhoods0420.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/{id}")
    public Member updateMember(@PathVariable long id, @Validated @RequestBody Member newMember) {
        Member updatedMember = memberRepository.findById(id)
                .map(member -> {
                    member.setName(newMember.getName());
                    member.setStatus(newMember.getStatus());
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
