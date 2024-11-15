# Write your MySQL query statement below
select Project.project_id ,round(avg(experience_years),2) as average_years
from Project
join Employee on Employee.employee_id = Project.employee_id
group by Project.project_id 