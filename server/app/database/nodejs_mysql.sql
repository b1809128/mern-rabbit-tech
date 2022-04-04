-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 04, 2022 lúc 02:11 AM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `nodejs_mysql`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `address`
--

CREATE TABLE `address` (
  `id` int(20) NOT NULL,
  `fullname` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phonenumber` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `addressdetails` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `address`
--

INSERT INTO `address` (`id`, `fullname`, `phonenumber`, `email`, `addressdetails`) VALUES
(10, 'Nguyen Phuong Thao', '87987890', 'pthao@gmail.com', 'Vinh Thuan, Kien Giang'),
(22, 'Nguyen Thi Thao Anh', '0904393232', 'ngthaoanh2011@gmail.com', '29/13, duong 30/4, phuong Hung Loi, quan Ninh Kieu, Thanh pho Can Tho'),
(24, 'Nguyen Ho Minh Thu', '9808090', 'nghominhthu1607@gmail.com', 'Nguyen Dinh Chieu, Quan 1, Thanh pho Ho Chi Minh'),
(25, 'Nguyen Ho Quoc Huy', '098439384', 'nghoquochuy@gmail.com', 'Ninh Kieu, Can Tho'),
(27, 'Nguyen Chi Hieu', '088626616', 'ngchihieu@gmail.com', 'Ninh Kieu, Can Tho'),
(31, 'Pham Van Trong Nhan', '4590800', 'pvtnhan@gmail.com', 'Phong Dien, can Tho'),
(42, 'Nguyen Van Tester', '7897689', 'ngvantest@gmail.com', 'TPHCM, Viet Nam'),
(48, 'Nguyen Van Test', '896948087', 'test1@gmail.com', 'Ninh Kieu, Can Tho'),
(49, 'Nguyen Van Test 2', '365785', 'ngvantest@gmail.com.vn', 'Quan 1, Thanh pho Ho Chi Minh'),
(50, 'Nguyen Van Test 3', '56453242', 'ngvantest@gmail.com.edu', 'Can Tho, tester hihi'),
(51, 'nguyen van test 4', '45645876', 'ngvantest4@gmail.com.vn', 'Quan 2, Thanh pho Ho Chi Minh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` int(20) NOT NULL,
  `user` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id`, `user`, `password`, `role`) VALUES
(10, 'pthao', 'bf32d197f35684b9c075b9eb9823ee0c', 'customer'),
(22, 'tanh', 'ae0eef7cc3584832aa8eb73dcb81e2bb', 'administrator'),
(24, 'mthu', '7663d2f8f7c03e8d790ef81530a86260', 'customer'),
(25, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'administrator'),
(27, 'chieu', 'e36a688e4838c0f47f7eca369706d43b', 'customer'),
(31, 'tnhan', '69112ec9fc3434179b7851955a6839ab', 'customer'),
(38, 'hlinh', '7de847eed7a6321dba782252f86a235d', 'customer'),
(42, 'test', 'cc03e747a6afbbcbf8be7668acfebee5', 'customer'),
(48, 'test1', 'cc03e747a6afbbcbf8be7668acfebee5', 'customer'),
(49, 'test2', 'cc03e747a6afbbcbf8be7668acfebee5', 'customer'),
(50, 'test3', 'cc03e747a6afbbcbf8be7668acfebee5', 'customer'),
(51, 'test4', 'cc03e747a6afbbcbf8be7668acfebee5', 'customer'),
(53, 'tanh1', 'ae0eef7cc3584832aa8eb73dcb81e2bb', 'customer'),
(54, 'test5', 'cc03e747a6afbbcbf8be7668acfebee5', 'customer'),
(56, 'test6', 'cc03e747a6afbbcbf8be7668acfebee5', 'customer');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `details_order`
--

CREATE TABLE `details_order` (
  `id_order` int(20) NOT NULL,
  `MSHH` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoLuong` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `details_order`
--

INSERT INTO `details_order` (`id_order`, `MSHH`, `SoLuong`) VALUES
(1, 'ip_001', 2),
(2, 'as_005', 1),
(1, 'as_001', 1),
(3, 'ip_002', 1),
(4, 'ip_002', 1),
(5, 'ip_002', 1),
(6, 'as_005', 2),
(7, 'as_001', 1),
(7, 'as_002', 2),
(1562, 'as_001', 1),
(1562, 'as_002', 2),
(4115, 'as_001', 1),
(4115, 'as_002', 1),
(9633, 'ip_001', 2),
(7973, 'ip_001', 2),
(218, 'as_001', 1),
(218, 'as_002', 1),
(6457, 'as_001', 1),
(6457, 'as_002', 1),
(1907, 'as_001', 1),
(4249, 'ip_001', 1),
(1946, 'ip_001', 1),
(7832, 'as_002', 1),
(6695, 'ip_001', 1),
(4475, 'as_001', 3),
(8031, 'aw_005', 2),
(8031, 'ip_008', 2),
(2230, 'lt_001', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hanghoa`
--

CREATE TABLE `hanghoa` (
  `MSHH` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TenHH` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Gia` int(11) NOT NULL,
  `SoLuongHang` int(11) NOT NULL,
  `MoTa` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `MaLoaiHang` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tags` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hanghoa`
--

INSERT INTO `hanghoa` (`MSHH`, `TenHH`, `Gia`, `SoLuongHang`, `MoTa`, `MaLoaiHang`, `tags`) VALUES
('as_001', 'Asus ROG Phone 3', 14590000, 10, '{\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\n      \"Brand\": \"Apple\",\n      \"Type\": \"Phone\",\n      \"Coor\": \"white\",\n      \"Memory\": 512,\n      \n      \n        \"Screen\":\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\n        \"OS\": \"iOS 14\",\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\n        \"ROM\": \"512GB\",\n        \"RAM\": \"6GB\",\n        \"Network\": \"5G\",\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\n        \"Weight\": \"228g\",\n        \"Battery\": \"3687mAh\"\n  }', 'AS', '\'phone,as,asus\''),
('as_002', 'Asus ROG Phone 5', 15350000, 6, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'AS', '\'phone,as,asus\''),
('as_003', 'Asus  ROG Phone 3s', 3400000, 20, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AS', '\'phone,asus,2017\''),
('as_004', 'Asus New Flex Z1 2022', 22000000, 0, '{\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\n      \"Brand\": \"Apple\",\n      \"Type\": \"Phone\",\n      \"Coor\": \"white\",\n      \"Memory\": 512,\n      \n      \n        \"Screen\":\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\n        \"OS\": \"iOS 14\",\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\n        \"ROM\": \"512GB\",\n        \"RAM\": \"6GB\",\n        \"Network\": \"5G\",\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\n        \"Weight\": \"228g\",\n        \"Battery\": \"3687mAh\"\n  }', 'AS', '\'phone,as,asus\''),
('as_005', 'Asus New Flex Z1 128GB', 12000000, 3, '{\"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AS', '\'phone,as,asus\''),
('aw_001', 'Apple Watch Series 5', 7990000, 20, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, Watch, 2021\''),
('aw_002', 'Apple Watch Series 6 LTE', 8990000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, Watch, 2021\''),
('aw_003', 'Apple Watch Series 6', 9790000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, Watch, 2021\''),
('aw_004', 'Apple Watch S7 LTE', 14000000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, Watch, 2021\''),
('aw_005', 'Apple Watch S7', 12000000, 8, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, Watch, 2021\''),
('hp_001', 'Airpods 2 Wireless', 3950000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, Headphone,airpods , 2021\''),
('hp_002', 'Airpods Pro', 4990000, 20, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, Headphone,airpods , 2021\''),
('hp_003', 'Sony True Wireless 2', 6990000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'SN', '\'Sony, Headphone,airpods , 2021\''),
('hp_004', 'Sony WH-1000XM3', 5100000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'SN', '\'Headphone, sony,beats, 2021\''),
('hp_005', 'Apple Beats Studio3 Wireless Over-Ear - Chính hãng', 6990000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Headphone, Apple, Beats, 2021\''),
('ip_001', 'iPhone 12 Promax 512 GB', 35500000, 82, '{\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\n      \"Brand\": \"Apple\",\n      \"Type\": \"Phone\",\n      \"Coor\": \"white\",\n      \"Memory\": 512,\n      \n      \n        \"Screen\":\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\n        \"OS\": \"iOS 14\",\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\n        \"ROM\": \"512GB\",\n        \"RAM\": \"6GB\",\n        \"Network\": \"5G\",\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\n        \"Weight\": \"228g\",\n        \"Battery\": \"3687mAh\"\n  }', 'AP', '\'phone,iphone,apple,promax,pro,12,13\''),
('ip_002', 'iPhone 12 Promax 256GB', 31500000, 19, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'AP', '\'phone,iphone,apple,promax,pro,12,13\''),
('ip_003', 'iPhone 12 Pro 256GB', 29500000, 8, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'AP', '\'phone,iphone,apple,promax,pro,12,13\''),
('ip_004', 'iPhone 12 128GB', 25500000, 15, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'AP', '\'phone,iphone,apple,promax,pro,12,13\''),
('ip_005', 'iPhone 12 Mini 256GB', 25900000, 14, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'AP', '\'phone,iphone,apple,promax,pro,12,13\''),
('ip_006', 'iPhone 13 256GB VN/A', 27990000, 30, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, iphone , 2021\''),
('ip_007', 'iPhone 13 Mini 256GB VN/A', 25990000, 30, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, iphone , 2021\''),
('ip_008', 'iPhone 13 Pro 256GB VN/A', 33590000, 28, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, iphone , 2021\''),
('ip_009', 'iPhone 13 Pro Max 256GB VN/A', 35590000, 30, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, iphone , 2021\''),
('ip_010', 'iPhone 13 Pro Max 512GB VN/A', 35590000, 30, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, iphone , 2021\''),
('ip_011', 'iPhone 13 Pro Max 1 TB VN/A', 47950000, 35, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Apple, iphone , 2021\''),
('lt_001', 'Macbook Pro M1 512GB', 49250000, 29, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Laptop, Macbook, M1, 2022\''),
('lt_002', 'Macbook Pro M1 1TB 2022', 52000000, 40, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AP', '\'Laptop, Macbook, M1, 2022\''),
('lt_003', 'Dell AlienWare RTX 3090ti Core i9', 38500000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'DL', '\'Laptop, Dell, Gaming, 2022\''),
('lt_004', 'Asus ROG Gaming R343', 27560000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AS', '\'Laptop, Asus, Gaming, 2022\''),
('lt_005', 'Asus TUF Gaming 2021', 18990000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'AS', '\'Laptop, Asus, Gaming, 2021\''),
('op_001', 'Oppo Reno 5 5G', 10500000, 48, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'OP', '\'phone,op,oppo\''),
('op_002', 'Oppo Reno 6 Pro', 9500000, 3, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'OP', '\'phone,op,oppo\''),
('op_003', 'Oppo Reno 7 5G', 9600000, 10, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'OP', '\'phone,op,oppo\''),
('ss_001', 'Samsung S22 Ultra 5G', 24500000, 36, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'SS', '\'phone,ss,samsung, ultra, s21, s10\''),
('ss_002', 'SamSung S22 Plus 512GB', 24500000, 32, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'SS', '\'phone,ss,samsung, ultra, s21, s10\''),
('ss_003', 'SamSung Z Fold 3 5G', 25500000, 5, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'SS', '\'phone,ss,samsung, ultra, s21, s10\''),
('ss_004', 'SamSung S22 256GB', 23500000, 35, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'SS', '\'phone,ss,samsung, ultra, s21, s10\''),
('ss_005', 'SamSung Z Fold 3 512GB', 15500000, 5, '{\r\n    \"Description\":\"Nhắc tới Apple, người dùng sẽ luôn nghĩ tới những thiết bị iPhone đẳng cấp, mang trên mình một thiết kế vô cùng sang trọng, hiện đại và thời thượng. Và iPhone 12 Series của năm nay cũng không phải là một ngoại lệ. Mẫu iPhone 12 64GB sở hữu một thiết kế đã được “lột xác” hoàn toàn so với các thế hệ tiền nhiệm trước đây.\",\r\n      \"Brand\": \"Apple\",\r\n      \"Type\": \"Phone\",\r\n      \"Coor\": \"white\",\r\n      \"Memory\": 512,\r\n      \r\n      \r\n        \"Screen\":\r\n          \"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\r\n        \"OS\": \"iOS 14\",\r\n        \"CPU\": \"Apple A14 Bionic 6 cores\",\r\n        \"ROM\": \"512GB\",\r\n        \"RAM\": \"6GB\",\r\n        \"Network\": \"5G\",\r\n        \"SIM\": \"1 Nano SIM & 1 eSIM\",\r\n        \"Weight\": \"228g\",\r\n        \"Battery\": \"3687mAh\"\r\n  }', 'SS', '\'phone,ss,samsung, ultra, s21, s10\''),
('sw_001', 'Samsung Galaxy Watch 3', 4990000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'SS', '\'Samsung, Watch, 2021\''),
('sw_002', 'Samsung Galaxy Watch 4', 6990000, 10, '{\"Description\":\"abc\",\"Brand\":\"Apple\",\"Type\":\"Phone\",\"Coor\":\"white\",\"Memory\":512,\"Screen\":\"OLED Resolution: 1284 x 2778 Pixels, 3 cameras 12 MP, 12 MP Wide screen: 6.7\",\"OS\":\"iOS 14\",\"CPU\":\"Apple A14 Bionic 6 cores\",\"ROM\":\"512GB\",\"RAM\":\"6GB\",\"Network\":\"5G\",\"SIM\":\"1 Nano SIM & 1 eSIM\",\"Weight\":\"228g\",\"Battery\":\"3687mAh\"}', 'SS', '\'Samsung, Watch, 2021\'');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhanh`
--

CREATE TABLE `hinhanh` (
  `ID` int(20) NOT NULL,
  `MSHH` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PATH` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hinhanh`
--

INSERT INTO `hinhanh` (`ID`, `MSHH`, `PATH`) VALUES
(2, 'as_001', '[\"/images/products/asus/rogphone3/1.png\",\"/images/products/asus/rogphone3/2.png\"]'),
(3, 'as_002', '[\"/images/products/asus/rogphone5/1.png\",\"/images/products/asus/rogphone5/2.png\",\"/images/products/asus/rogphone5/3.png\",\"/images/products/asus/rogphone5/4.png\"]'),
(4, 'as_003', '[\"/images/products/asus/rogphone3/2.png\",\"/images/products/asus/rogphone3/1.png\"]'),
(5, 'ip_001', '[\"/images/products/apple/12promax/1.png\",\"/images/products/apple/12promax/2.png\",\"/images/products/apple/12promax/3.png\",\"/images/products/apple/12promax/4.png\"]'),
(6, 'ip_002', '[\"/images/products/apple/12promax/2.png\",\"/images/products/apple/12promax/1.png\",\"/images/products/apple/12promax/4.png\",\"/images/products/apple/12promax/3.png\"]'),
(7, 'ip_003', '[\"/images/products/apple/12promax/1.png\",\"/images/products/apple/12promax/2.png\",\"/images/products/apple/12promax/3.png\",\"/images/products/apple/12promax/4.png\"]'),
(8, 'ip_004', '[\"/images/products/apple/12/1.png\",\"/images/products/apple/12/2.png\",\"/images/products/apple/12/3.png\",\"/images/products/apple/12/4.png\"]'),
(9, 'ip_005', '[\"/images/products/apple/12/4.png\",\"/images/products/apple/12/1.png\",\"/images/products/apple/12/6.png\"]'),
(10, 'op_001', '[\"/images/products/oppo/reno5/1.png\",\"/images/products/oppo/reno5/2.png\"]'),
(11, 'op_002', '[\"/images/products/oppo/reno6/1.png\",\"/images/products/oppo/reno6/2.png\"]'),
(12, 'op_003', '[\"/images/products/oppo/reno7/1.png\",\"/images/products/oppo/reno7/2.png\",\"/images/products/oppo/reno7/4.png\",\"/images/products/oppo/reno7/5.png\"]'),
(13, 'ss_001', '[\"/images/products/samsung/s22/1.png\",\"/images/products/samsung/s22/2.png\",\"/images/products/samsung/s22/3.png\",\"/images/products/samsung/s22/4.png\"]'),
(14, 'ss_002', '[\"/images/products/samsung/s22/5.png\",\"/images/products/samsung/s22/6.png\",\"/images/products/samsung/s22/7.png\",\"/images/products/samsung/s22/8.png\"]'),
(15, 'ss_003', '[\"/images/products/samsung/zfold/1.png\",\"/images/products/samsung/zfold/2.png\",\"/images/products/samsung/zfold/3.png\"]'),
(16, 'ss_004', '[\"/images/products/samsung/s22/1.png\",\"/images/products/samsung/s22/2.png\",\"/images/products/samsung/s22/5.png\",\"/images/products/samsung/s22/8.png\"]'),
(17, 'ss_005', '[\"/images/products/samsung/zfold/3.png\",\"/images/products/samsung/zfold/2.png\",\"/images/products/samsung/zfold/1.png\"]'),
(18, 'as_004', '[\"/images/products/asus/z1/3.png\",\"/images/products/asus/z1/1.png\"]'),
(25, 'as_005', '[\"/images/products/asus/z1/1.png\",\"/images/products/asus/z1/3.png\"]'),
(36, 'aw_001', '[\"/images/products/apple/series5/1.png\",\"/images/products/apple/series5/2.png\",\"/images/products/apple/series5/3.png\",\"/images/products/apple/series5/4.png\"]'),
(37, 'aw_002', '[\"/images/products/apple/series6/1.png\",\"/images/products/apple/series6/2.png\",\"/images/products/apple/series6/3.png\",\"/images/products/apple/series6/4.png\"]'),
(38, 'aw_003', '[\"/images/products/apple/series6/3.png\",\"/images/products/apple/series6/5.png\",\"/images/products/apple/series6/1.png\",\"/images/products/apple/series6/6.png\"]'),
(39, 'aw_005', '[\"/images/products/apple/series7/1.png\",\"/images/products/apple/series7/2.png\",\"/images/products/apple/series7/3.png\",\"/images/products/apple/series7/4.png\"]'),
(40, 'aw_004', '[\"/images/products/apple/series7/5.png\",\"/images/products/apple/series7/6.png\",\"/images/products/apple/series7/7.png\",\"/images/products/apple/series7/8.png\"]'),
(41, 'lt_001', '[\"/images/products/apple/macbook/1.png\",\"/images/products/apple/macbook/2.png\",\"/images/products/apple/macbook/3.png\",\"/images/products/apple/macbook/4.png\"]'),
(42, 'lt_002', '[\"/images/products/apple/macbook/1.png\",\"/images/products/apple/macbook/2.png\",\"/images/products/apple/macbook/5.png\",\"/images/products/apple/macbook/6.png\"]'),
(43, 'lt_003', '[\"/images/products/dell/g15/1.png\",\"/images/products/dell/g15/2.png\",\"/images/products/dell/g15/3.png\",\"/images/products/dell/g15/4.png\"]'),
(44, 'lt_004', '[\"/images/products/asus/roggaming/1.png\",\"/images/products/asus/roggaming/2.png\",\"/images/products/asus/roggaming/3.png\",\"/images/products/asus/roggaming/4.png\"]'),
(45, 'lt_005', '[\"/images/products/asus/tufgaming/1.png\",\"/images/products/asus/tufgaming/2.png\",\"/images/products/asus/tufgaming/3.png\"]'),
(46, 'hp_001', '[\"/images/products/apple/airpods2/1.png\",\"/images/products/apple/airpods2/2.png\",\"/images/products/apple/airpods2/3.png\"]'),
(47, 'hp_002', '[\"/images/products/apple/airpodspro/1.png\",\"/images/products/apple/airpodspro/2.png\",\"/images/products/apple/airpodspro/3.png\",\"/images/products/apple/airpodspro/4.png\"]'),
(48, 'hp_003', '[\"/images/products/sony/headphone/1.png\",\"/images/products/sony/headphone/2.png\",\"/images/products/sony/headphone/3.png\",\"/images/products/sony/headphone/4.png\"]'),
(53, 'ip_006', '[\"/images/products/apple/13/1.png\",\"/images/products/apple/13/2.png\",\"/images/products/apple/13/3.png\",\"/images/products/apple/13/4.png\"]'),
(54, 'ip_007', '[\"/images/products/apple/13/3.png\",\"/images/products/apple/13/2.png\",\"/images/products/apple/13/1.png\",\"/images/products/apple/13/5.png\"]'),
(55, 'ip_008', '[\"/images/products/apple/13promax/4.png\",\"/images/products/apple/13promax/3.png\",\"/images/products/apple/13promax/1.png\",\"/images/products/apple/13promax/5.png\"]'),
(56, 'ip_009', '[\"/images/products/apple/13promax/2.png\",\"/images/products/apple/13promax/3.png\",\"/images/products/apple/13promax/4.png\",\"/images/products/apple/13promax/5.png\"]'),
(57, 'ip_010', '[\"/images/products/apple/13promax/4.png\",\"/images/products/apple/13promax/2.png\",\"/images/products/apple/13promax/3.png\",\"/images/products/apple/13promax/5.png\"]'),
(58, 'ip_011', '[\"/images/products/apple/13promax/5.png\",\"/images/products/apple/13promax/3.png\",\"/images/products/apple/13promax/4.png\",\"/images/products/apple/13promax/1.png\"]'),
(59, 'hp_004', '[\"/images/products/sony/beats/1.png\",\"/images/products/sony/beats/2.png\",\"/images/products/sony/beats/3.png\",\"/images/products/sony/beats/4.png\"]'),
(60, 'hp_005', '[\"/images/products/apple/beats/1.png\",\"/images/products/apple/beats/2.png\",\"/images/products/apple/beats/3.png\",\"/images/products/apple/beats/4.png\"]'),
(62, 'sw_001', '[\"/images/products/samsung/watch3/1.png\",\"/images/products/samsung/watch3/2.png\",\"/images/products/samsung/watch3/3.png\"]'),
(63, 'sw_002', '[\"/images/products/samsung/watch4/1.png\",\"/images/products/samsung/watch4/2.png\",\"/images/products/samsung/watch4/3.png\",\"/images/products/samsung/watch4/4.png\",\"/images/products/samsung/watch4/5.png\"]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaihanghoa`
--

CREATE TABLE `loaihanghoa` (
  `MaLoaiHang` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TenLoaiHang` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loaihanghoa`
--

INSERT INTO `loaihanghoa` (`MaLoaiHang`, `TenLoaiHang`) VALUES
('AP', 'Apple'),
('AS', 'Asus'),
('DL', 'Dell'),
('OP', 'Oppo'),
('SN', 'Sony'),
('SS', 'SamSung');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `MSNV` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `HoTenNV` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ChucVu` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DiaChi` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoDienThoai` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `User` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Password` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`MSNV`, `HoTenNV`, `ChucVu`, `DiaChi`, `SoDienThoai`, `User`, `Password`) VALUES
('A01', 'Nguyen Thi Thao Anh', 'CEO', 'Can Tho', '0904393232', 'admin', 'admin'),
('A02', 'Nguyen Ho Quoc Huy', 'CTO', 'Can Tho', '0937790999', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_product`
--

CREATE TABLE `order_product` (
  `id_order` int(20) NOT NULL,
  `id` int(50) NOT NULL,
  `id_staff` int(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_product`
--

INSERT INTO `order_product` (`id_order`, `id`, `id_staff`, `created_at`, `status`) VALUES
(1, 27, 1, '2022-01-20 15:19:39', 'Completed'),
(2, 24, 1, '2022-01-20 15:19:39', 'Not Yet'),
(3, 22, 1, '2022-01-21 07:45:28', 'Completed'),
(4, 22, 1, '2022-01-22 08:57:00', 'Not Yet'),
(5, 27, 1, '2022-02-10 06:48:12', 'Completed'),
(6, 22, 1, '2022-03-20 12:48:20', 'Not Yet'),
(7, 27, 1, '2022-03-21 11:46:13', 'Not Yet'),
(218, 10, 1, '2022-03-22 11:53:12', 'Not Yet'),
(1562, 51, 1, '2022-03-22 06:57:12', 'Not Yet'),
(1907, 22, 1, '2022-03-22 13:54:54', 'Not Yet'),
(1946, 22, 1, '2022-03-22 14:28:05', 'Not Yet'),
(2230, 48, 1, '2022-04-02 15:26:59', 'Not Yet'),
(4115, 49, 1, '2022-03-22 07:28:18', 'Not Yet'),
(4249, 22, 1, '2022-03-22 14:27:49', 'Not Yet'),
(4475, 22, 1, '2022-03-23 12:13:24', 'Not Yet'),
(6457, 10, 1, '2022-03-22 12:59:34', 'Not Yet'),
(6695, 51, 1, '2022-03-22 14:31:58', 'Not Yet'),
(7832, 51, 1, '2022-03-22 14:31:11', 'Not Yet'),
(7973, 10, 1, '2022-03-22 11:50:21', 'Not Yet'),
(8031, 22, 1, '2022-04-02 02:25:13', 'Not Yet'),
(9633, 10, 1, '2022-03-22 11:49:09', 'Completed');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `details_order`
--
ALTER TABLE `details_order`
  ADD KEY `id_order` (`id_order`),
  ADD KEY `MSHH` (`MSHH`);

--
-- Chỉ mục cho bảng `hanghoa`
--
ALTER TABLE `hanghoa`
  ADD PRIMARY KEY (`MSHH`),
  ADD KEY `MaLoaiHang` (`MaLoaiHang`);

--
-- Chỉ mục cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `MSHH` (`MSHH`);

--
-- Chỉ mục cho bảng `loaihanghoa`
--
ALTER TABLE `loaihanghoa`
  ADD PRIMARY KEY (`MaLoaiHang`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`MSNV`);

--
-- Chỉ mục cho bảng `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `details_order`
--
ALTER TABLE `details_order`
  ADD CONSTRAINT `details_order_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `order_product` (`id_order`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `details_order_ibfk_2` FOREIGN KEY (`MSHH`) REFERENCES `hanghoa` (`MSHH`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `hanghoa`
--
ALTER TABLE `hanghoa`
  ADD CONSTRAINT `hanghoa_ibfk_1` FOREIGN KEY (`MaLoaiHang`) REFERENCES `loaihanghoa` (`MaLoaiHang`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `hinhanh`
--
ALTER TABLE `hinhanh`
  ADD CONSTRAINT `hinhanh_ibfk_1` FOREIGN KEY (`MSHH`) REFERENCES `hanghoa` (`MSHH`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `order_product`
--
ALTER TABLE `order_product`
  ADD CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
