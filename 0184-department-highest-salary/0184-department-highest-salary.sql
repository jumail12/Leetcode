# Write your MySQL query statement below
select d.name as Department , e.name as  Employee , e.salary  as  Salary 
from  Department  d
 join Employee e on e.departmentId = d.id 
where e.salary = (select Max(salary) from Employee where departmentId = d.id);
