# Write your MySQL query statement below
select c.customer_id from Customer c
group by 
c.customer_id
Having 
count(distinct product_key)=(select count(*) from product); 
