
## 首先推荐
[廖雪峰的Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
[Git官网](https://git-scm.com/docs)

# Git下用gitbash，不要用desktop

```java
1. git init
2. git config --list
  1. git config --system --list
  2. git config --global --list
    1. git config --global user.name "yourname"
    2. git config --global user.email "youremail@cc"
  3. git config --local --list
3. git add <filename> 
  1. git add .
  2. git add -u
  3. git add -A
  4. git add -f <filename>  强制添加
4. git rm <filename>
5. git commit -m "comments"
6. git status
  1. git diff [<filename>]
  2. git diff --cached, git diff --staged 一样的
  3. git diff HEAD -- <filename>
7. git log, git reflog
  1. git log --pretty=oneline 看HEAD
  2. git log --graph -pretty=oneline --abbrev-commit  分支
8. git reset --hard HEAD  ^ ~
  1. git checkout -- <filename>
  2. git reset HEAD <filename>
  3. git reset --hard HEAD  
9. 远程库
  1. ssh-keygen -t rsa -C "youremail" + 将pub_key放到github上
  2. github上new repository
  3. git remote add origin git@
    1. 关联后可以用git remote -v看
    2. git remote rm origin   删除关联  默认名字origin
    3. git remote add github git@   这里就换名字了，以后git push github master这样换名字
       git remote add gitee git@
  4. git push -u origin master 第一次加-u，以后不加. 这个必须要本地commit后才能推送，
  5. git clone git@   clone的只是master分支
10. 分支
  1. git branch [<branchname>] 
    1. git branch -d <branchname>
  2. git checkout <branchname>
    1. git checkout -b <branckname>
  3. git merge <baranchname>  默认merge是Fast forward, 没有commit的HEAD
    1. git merge --no-ff -m "comments" <branchname>
  4. 若有冲突，就改下一下，然后commit，不用git merge  
    1. mergetool, kdiff, meld
  5. git log --graph -pretty=oneline --abbrev-commit
  6. 策略 bug和feature分支，保存现场，防止干扰。因为working directory and stage sharing
    1. git stash 
      1. git stash apply, git stash drop => git stash pop 二合一  
      2. git stash apply stash@{0} 序号
11. 多人协作
  1. git remote [-v]
  2. git checkout -b dev origin/dev   远程库dev分支创建并切换到本地
  3. git push origin master/dev   
  4. 冲突 git branch --set-upstream <branch-name> origin/<branch-name> 关联
  5. 解决冲突在 git pull
12. 标签tags
  1. git tag [<tagname>] 查看，打在最新的commmit上
    1. git tag -d <tagname>   删本地
    2. git push origin:ref/tags/<tagname>
  2. git tag <tagname> <HEAD>  用git log --pretty=oneline 查到
    1. git tag -a <tagname> -m "comments" <HEAD>
    2. git tag -s <tagname> -m "comments" <HEAD>
  3. git show <tagname>
13. 自定义 git config 在.git/config
  1. .gitignore 忽略文件
    1. 若添加不进去, git add -f <filename>
    2. git check-ignore -v <filename>是在不行check下
  2. git config --global alias.st status    设置别名
    1. git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

```