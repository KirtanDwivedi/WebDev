-- select * from cars;
select brand, model, color, year, price, sold from cars
    where color like '%green%' and model like 'DB_' and price between 400000 and 600000 and sold is false and brand in ('Aston Martin', 'Jaguar')
    order by color asc limit 1 group by brand having count(brand) > 2;

insert into cars (brand, model, year, price, color, condition, sold) values ('Aston Martin', 'DB5', 1965, 649000, 'dark red', 5, false),
                                                                            ('HONDA`', 'Civic', 2022, 25000, 'white', 5, true);

update cars set price = 1000000 where brand = 'Aston Martin' and model = 'DB5';
delete from cars where brand = 'HONDA' and model = 'Civic';








-- db.exec(sql): Use this for multiple SQL statements
-- db.query(sql): Use this for single SQL statements
-- '=' for numbers and 'is' for boolean and NULL values
-- limit 1 means only 1 result
-- sum, count, distinct, max, min, floor(avg)- use with select
-- unique - dataset constraint