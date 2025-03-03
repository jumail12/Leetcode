# Write your MySQL query statement below
select c.name as Customers   from Customers c
Left join Orders o on o.customerId=c.id
where  o.customerId is Null;
