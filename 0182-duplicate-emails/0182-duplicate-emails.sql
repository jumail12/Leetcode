# Write your MySQL query statement below
select a.Email from Person  a
group by a.Email
having count(a.Email)>1;