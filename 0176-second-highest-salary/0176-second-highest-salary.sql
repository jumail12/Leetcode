# Write your MySQL query statement below
select (SELECT DISTINCT salary 
FROM Employee
WHERE salary < (SELECT MAX(Salary) FROM Employee)
ORDER BY salary DESC
limit 1) as  SecondHighestSalary;




