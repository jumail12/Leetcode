# Write your MySQL query statement below

SELECT  Product.product_name ,Sales.year ,Sales.price
FROM Product
 inner JOIN Sales ON Sales.product_id = Product.product_id;

