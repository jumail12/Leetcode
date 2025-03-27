# Write your MySQL query statement below
select u.name as NAME , sum(t.amount) as BALANCE  from Users u
inner join Transactions t  on t.account = u.account
group by u.name
having BALANCE > 10000