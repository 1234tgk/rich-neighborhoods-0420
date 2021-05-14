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

    // no need to delete member, but here it is anyway
    @DeleteMapping("/{id}")
    public void deleteMember(@PathVariable long id) {
        memberRepository.deleteById(id);
    }
}
