# Club Ledger App Project

## Instructions for Devs

### Git WorkFlow:
To make your branch...
```
git pull
git branch <branch-name>
git checkout <branch-name>
```
(Shorthand of last two commands is: `git checkout -b <branch-name>`)
  \
If at some point you need to update your master during your work...
```
git checkout master
git pull
git checkout <branch-name>
git rebase master
```
  \
Once you make changes to your branches...
```
git add --all
git commit
```
(or `git commit -m "<commit-message>`")
```
git push
```
(if this causes error, do whatever git tells you to)\
(If I need to merge your change to the origin, create a pull request.)

