-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2022 at 12:50 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `butterflydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `question` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `question`, `created_at`, `updated_at`) VALUES
(1, 'Abdullah', 'abdullah@gmail.com', 'test...', '2022-08-07 04:36:40', '2022-08-07 04:36:40');

-- --------------------------------------------------------

--
-- Table structure for table `cvdata`
--

CREATE TABLE `cvdata` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `religion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `presentAddress` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `divisionPresent` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dristrictPresent` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `parmanentAddress` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `divisionParmanent` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dristrictParmanent` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `specialCase` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `spousePreference` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `height` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` int(11) NOT NULL,
  `bloodGroup` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `grownUpAt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `specialCondition` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fatherName` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fatherOcupation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `motherName` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `motherOcupation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `maritalStatus` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cvdata`
--

INSERT INTO `cvdata` (`id`, `image`, `name`, `gender`, `phone`, `religion`, `email`, `presentAddress`, `divisionPresent`, `dristrictPresent`, `parmanentAddress`, `divisionParmanent`, `dristrictParmanent`, `age`, `specialCase`, `spousePreference`, `about`, `height`, `weight`, `bloodGroup`, `grownUpAt`, `specialCondition`, `fatherName`, `fatherOcupation`, `motherName`, `motherOcupation`, `maritalStatus`, `created_at`, `updated_at`) VALUES
(1, 'uploads/images/card_3.png', 'bvdsgvbdsbvs', 'Male', '436366', 'Hindu', 'gfdsg@gmajj.jkdj', 'evsdvffds', 'bfdbdf', 'fbdbd', 'fdfdb', 'bddf', 'fdbdfbbd', '1980-01-06', 'Addiction', 'Job', 'sgfrgvbfdsbv', '5ft 2', 54, 'A-', 'ggregr', 'grreger', 'gbdbh', 'sgsg', 'sfgseg', 'gseseg', 'Unmarried', '2022-06-23 23:57:32', '2022-07-23 23:57:32'),
(2, 'uploads/images/card_3.png', 'bvdsgvbdsbvs', 'Male', '436366', 'Hindu', 'gfdsg@gmajj.jkdj', 'evsdvffds', 'bfdbdf', 'fbdbd', 'fdfdb', 'bddf', 'fdbdfbbd', '2002-07-06', 'Addiction', 'Job', 'sgfrgvbfdsbv', '5ft 2', 54, 'A-', 'ggregr', 'grreger', 'gbdbh', 'sgsg', 'sfgseg', 'gseseg', 'Unmarried', '2022-07-24 00:03:12', '2022-07-24 00:03:12'),
(3, 'uploads/images/', 'jhk', 'Female', '01686121793', 'Muslim', 'hgj', 'ghjg', 'ghj', 'hjgd', 'dhgj', 'djh', 'dj', '2002-07-06', 'Other', 'No Job', 'hgjdh', '4ft 9', 657, 'A-', 'fdhj', 'dfgjh', 'fdgda', 'dfg', 'fdgsa', 'dfg', 'Unmarried', '2022-08-26 04:34:09', '2022-07-26 04:34:09'),
(4, 'uploads/images/', 'jhk', 'Female', '01686121793', 'Muslim', 'hgj', 'ghjg', 'ghj', 'hjgd', 'dhgj', 'djh', 'dj', '2002-07-06', 'Other', 'No Job', 'hgjdh', '4ft 9', 657, 'A-', 'fdhj', 'dfgjh', 'fdgda', 'dfg', 'fdgsa', 'dfg', 'Unmarried', '2022-09-26 04:40:09', '2022-07-26 04:40:09'),
(5, 'uploads/images/', 'jhk', 'Female', '01686121793', 'Muslim', 'hgj', 'ghjg', 'ghj', 'hjgd', 'dhgj', 'djh', 'dj', '2002-07-06', 'Other', 'No Job', 'hgjdh', '4ft 9', 657, 'A-', 'fdhj', 'dfgjh', 'fdgda', 'dfg', 'fdgsa', 'dfg', 'Unmarried', '2022-10-26 04:46:27', '2022-07-26 04:46:27'),
(6, 'uploads/images/', 'jhk', 'Female', '01686121793', 'Muslim', 'hgj', 'ghjg', 'ghj', 'hjgd', 'dhgj', 'djh', 'dj', '2002-07-06', 'Other', 'No Job', 'hgjdh', '4ft 9', 657, 'A-', 'fdhj', 'dfgjh', 'fdgda', 'dfg', 'fdgsa', 'dfg', 'Unmarried', '2022-11-26 04:58:22', '2022-07-26 04:58:22'),
(7, 'uploads/images/', 'jhk', 'Female', '01686121793', 'Muslim', 'hgj', 'ghjg', 'ghj', 'hjgd', 'dhgj', 'djh', 'dj', '2002-07-06', 'Other', 'No Job', 'hgjdh', '4ft 9', 657, 'A-', 'fdhj', 'dfgjh', 'fdgda', 'dfg', 'fdgsa', 'dfg', 'Unmarried', '2022-12-26 04:59:59', '2022-07-26 04:59:59'),
(8, 'uploads/images/C:\\xampp\\tmp\\php4F3B.tmp', 'dfdf', 'Female', '01303074767', 'Hindu', 'dfs', 'fsa', 'fsdf', 'sfd', 'dfs', 'dfs', 'df', '1995-02-06', 'Addiction', 'Job', 'dfs', '4ft 8', 34, 'A-', 'Bangladesh', 'sdf', 'gh', 'g', 'g', 'g', 'Unmarried', '2021-10-26 05:02:13', '2022-07-26 05:02:13'),
(9, 'uploads/images/apu.png', 'dfdf', 'Female', '01303074767', 'Hindu', 'dfs', 'fsa', 'fsdf', 'sfd', 'dfs', 'dfs', 'df', '2002-07-06', 'Addiction', 'Job', 'dfs', '4ft 8', 34, 'A-', 'sfd', 'sdf', 'gh', 'g', 'g', 'g', 'Unmarried', '2022-07-26 05:03:15', '2022-07-26 05:03:15'),
(10, 'uploads/images/a.png', 'dfs', 'Female', '01686121793', 'Muslim', 'gjh', 'hjg', 'gjh', 'gj', 'ghjg', 'gjg', 'gjg', '1988-07-06', 'Diabetics', 'Job', 'hgj', '4ft 6', 232, 'A+', 'dgf', 'dfg', 'dfg', 'dg', 'dg', 'dg', 'Unmarried', '2022-07-26 05:17:04', '2022-07-26 05:17:04'),
(11, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '1992-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2022-07-26 05:37:24', '2022-07-26 05:37:24'),
(12, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '2002-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2022-01-26 05:39:42', '2022-07-26 05:39:42'),
(13, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '1990-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2022-02-26 05:41:11', '2022-07-26 05:41:11'),
(14, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '1995-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2022-03-26 05:43:07', '2022-07-26 05:43:07'),
(15, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '1990-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2022-04-26 05:43:55', '2022-07-26 05:43:55'),
(16, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '2002-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2022-05-26 05:44:54', '2022-07-26 05:44:54'),
(17, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '2002-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2022-06-26 05:45:43', '2022-07-26 05:45:43'),
(18, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '1996-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2022-07-26 05:50:43', '2022-07-26 05:50:43'),
(19, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '2002-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2021-09-26 05:51:24', '2022-07-26 05:51:24'),
(20, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '1998-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'Bangladesh', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2021-10-26 05:53:27', '2022-07-26 05:53:27'),
(21, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '1999-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'fgbdb', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2021-09-26 05:54:17', '2022-07-26 05:54:17'),
(22, 'uploads/images/.png', 'Abdullah Esha', 'Male', '01671405919', 'Muslim', 'gscxcs@gmail.com', 'fjbfvjbf', 'revbe', 'regrrg', 'grereggr', 'grerggrrg', 'rgggggggg', '1999-07-06', 'Addiction', 'No Job', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig nfwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', '4ft 6', 45, 'A-', 'Bangladesh', 'fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n fwefffffffffffffffffffffff iovfdnvenvke bke b 904 jtpiip034jhtipo3ng t0pjh355 u ngke nklnbfdj  bsjof hiw  iw ifh wig n', 'vsdvsvsv', 'sdvsdvsdv', 'dsvdsdds', 'vsddsv', 'Unmarried', '2021-09-26 05:55:40', '2022-07-26 05:55:40'),
(23, 'uploads/images/undefined.png', 'Hurera Shishir', 'Female', '01521431502', 'Muslim', 'abdullah@gmail.com', 'Dhaka, Mohammedpur', 'Dhaka', 'Dhaka', 'Dhaka, Mohammedpur', 'Dhaka', 'Dhaka', '1982-07-06', 'Addiction', 'No Job', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', '5ft 8', 56, 'A-', 'Bangladesh', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 'vewvweewv', 'evewwvewve', 'vewwevewv', 'evwevwevwe', 'Unmarried', '2021-12-26 07:03:02', '2022-07-26 07:03:02'),
(24, 'uploads/images/.png', 'rgrewgrw', 'Male', '01748292210', 'Muslim', 'jsjvfdbjksabva', 'gsnrwnw', 'trnrntrwnw', 'nwrnnttt', 'beerregbb', 'ergeg', 'egrergerg', '1996-02-06', 'Addiction', 'Job', 'ewagfebhgerhnbt', '4ft 6', 64, 'A+', 'Bangladesh', 'vdsdvvd', 'grweger', 'rehgberhb', 'ergrebhgeb', 'regrebbre', 'Unmarried', '2021-11-26 07:18:46', '2022-07-26 07:18:46'),
(25, 'uploads/images/.png', 'gjhvfker', 'Male', '01521431502', 'Muslim', 'vgshcvgh@gmail.com', 'ctyudcgs', 'fevb', 'grrbgbs', 'rrbnbe', 'rbbee', 'rbeber', '2022-08-05', 'Addiction', 'Job', 'bebergbebeb', '5ft 10', 70, 'AB+', 'Bangladesh', 'dwehfd cwehj cvhch sdfgdh fhjm', 'htthtrthr', 'hrrtrth', 'hrhh', 'htrthth', 'Unmarried', '2022-08-11 01:42:36', '2022-08-11 01:42:36'),
(26, 'uploads/images/.png', 'gjhvfker', 'Male', '01521431502', 'Muslim', 'vgshcvgh@gmail.com', 'ctyudcgs', 'fevb', 'grrbgbs', 'rrbnbe', 'rbbee', 'rbeber', '2022-08-05', 'Addiction', 'Job', 'bebergbebeb', '5ft 10', 70, 'AB+', 'Bangladesh', 'dwehfd cwehj cvhch sdfgdh fhjm', 'htthtrthr', 'hrrtrth', 'hrhh', 'htrthth', 'Unmarried', '2022-08-11 01:49:04', '2022-08-11 01:49:04'),
(27, 'uploads/images/.png', 'gjhvfker', 'Male', '01521431502', 'Muslim', 'vgshcvgh@gmail.com', 'ctyudcgs', 'fevb', 'grrbgbs', 'rrbnbe', 'rbbee', 'rbeber', '2022-08-05', 'Addiction', 'Job', 'bebergbebeb', '5ft 10', 70, 'AB+', 'Bangladesh', 'dwehfd cwehj cvhch sdfgdh fhjm', 'htthtrthr', 'hrrtrth', 'hrhh', 'htrthth', 'Unmarried', '2022-08-11 01:50:46', '2022-08-11 01:50:46'),
(28, 'uploads/images/.png', 'Rob Jhonson', 'Male', '01521431502', 'Christian', 'rob@gmail.com', 'New York', 'New York', 'New York', 'New York', 'New York', 'New York', '1983-07-13', 'Other', 'Job', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '5ft 10', 75, 'B+', 'USA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Mr. David Jackson', 'Manager of Citi Bank', 'Mrs. Stella Lardon', 'Chef Accountant of JFCK', 'Unmarried', '2022-08-11 03:28:12', '2022-08-11 03:28:12'),
(29, 'uploads/images/.png', 'Rob Jhonson', 'Male', '01521431502', 'Christian', 'rob@gmail.com', 'New York', 'New York', 'New York', 'New York', 'New York', 'New York', '1983-07-13', 'Other', 'Job', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '5ft 10', 75, 'B+', 'USA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Mr. David Jackson', 'Manager of Citi Bank', 'Mrs. Stella Lardon', 'Chef Accountant of JFCK', 'Unmarried', '2022-08-11 04:37:02', '2022-08-11 04:37:02'),
(30, 'uploads/images/.png', 'Rob Jhonson', 'Male', '01521431502', 'Christian', 'rob@gmail.com', 'New York', 'New York', 'New York', 'New York', 'New York', 'New York', '1983-07-13', 'Other', 'Job', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '5ft 10', 75, 'B+', 'USA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Mr. David Jackson', 'Manager of Citi Bank', 'Mrs. Stella Lardon', 'Chef Accountant of JFCK', 'Unmarried', '2022-08-11 04:40:29', '2022-08-11 04:40:29'),
(31, 'uploads/images/1660214758.png', 'Rob Jhonson', 'Male', '01521431502', 'Christian', 'rob@gmail.com', 'New York', 'New York', 'New York', 'New York', 'New York', 'New York', '1983-07-13', 'Other', 'Job', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '5ft 10', 75, 'B+', 'USA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Mr. David Jackson', 'Manager of Citi Bank', 'Mrs. Stella Lardon', 'Chef Accountant of JFCK', 'Unmarried', '2022-08-11 04:45:58', '2022-08-11 04:45:58'),
(32, 'uploads/images/1660214846.png', 'Rob Jhonson', 'Male', '01521431502', 'Christian', 'rob@gmail.com', 'New York', 'New York', 'New York', 'New York', 'New York', 'New York', '1983-07-13', 'Other', 'Job', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '5ft 10', 75, 'B+', 'USA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Mr. David Jackson', 'Manager of Citi Bank', 'Mrs. Stella Lardon', 'Chef Accountant of JFCK', 'Unmarried', '2022-08-11 04:47:26', '2022-08-11 04:47:26'),
(33, 'uploads/images/1660214933.png', 'Rob Jhonson', 'Male', '01521431502', 'Christian', 'rob@gmail.com', 'New York', 'New York', 'New York', 'New York', 'New York', 'New York', '1983-07-13', 'Other', 'Job', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '5ft 10', 75, 'B+', 'USA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Mr. David Jackson', 'Manager of Citi Bank', 'Mrs. Stella Lardon', 'Chef Accountant of JFCK', 'Unmarried', '2022-08-11 04:48:53', '2022-08-11 04:48:53'),
(34, 'uploads/images/1660214995.png', 'Rob Jhonson', 'Male', '01521431502', 'Christian', 'rob@gmail.com', 'New York', 'New York', 'New York', 'New York', 'New York', 'New York', '1983-07-13', 'Other', 'Job', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '5ft 10', 75, 'B+', 'USA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Mr. David Jackson', 'Manager of Citi Bank', 'Mrs. Stella Lardon', 'Chef Accountant of JFCK', 'Unmarried', '2022-08-11 04:49:55', '2022-08-11 04:49:55'),
(35, 'uploads/images/1660215141.png', 'Rob Jhonson', 'Male', '01521431502', 'Christian', 'rob@gmail.com', 'New York', 'New York', 'New York', 'New York', 'New York', 'New York', '1983-07-13', 'Other', 'Job', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '5ft 10', 75, 'B+', 'USA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Mr. David Jackson', 'Manager of Citi Bank', 'Mrs. Stella Lardon', 'Chef Accountant of JFCK', 'Unmarried', '2022-08-11 04:52:21', '2022-08-11 04:52:21'),
(36, 'uploads/images/1660215210.png', 'Rob Jhonson', 'Male', '01521431502', 'Christian', 'rob@gmail.com', 'New York', 'New York', 'New York', 'New York', 'New York', 'New York', '1983-07-13', 'Other', 'Job', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', '5ft 10', 75, 'B+', 'USA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Mr. David Jackson', 'Manager of Citi Bank', 'Mrs. Stella Lardon', 'Chef Accountant of JFCK', 'Unmarried', '2022-08-11 04:53:30', '2022-08-11 04:53:30');

-- --------------------------------------------------------

--
-- Table structure for table `edu_qualificationdata`
--

CREATE TABLE `edu_qualificationdata` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `instituteName` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `passingYear` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `levelOfEducation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `instituteLocation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `group` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvdata_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `edu_qualificationdata`
--

INSERT INTO `edu_qualificationdata` (`id`, `instituteName`, `passingYear`, `levelOfEducation`, `instituteLocation`, `group`, `cvdata_id`, `created_at`, `updated_at`) VALUES
(1, 'Ideal School', '2022-02', 'Higher Secondary', 'Dhaka', 'Science', 1, '2022-07-23 06:28:21', '2022-07-23 06:28:21'),
(2, 'bvfdfbf', '2022-01', 'Secondary', 'fafaf', 'Commerce', 1, '2022-07-23 23:27:18', '2022-07-23 23:27:18'),
(3, 'bvfdfbf', '2022-01', 'Secondary', 'fafaf', 'Commerce', 1, '2022-07-23 23:47:06', '2022-07-23 23:47:06'),
(4, 'dffdg', '2022-06', 'Higher Secondary', 'gdfb', 'Commerce', 1, '2022-07-23 23:51:12', '2022-07-23 23:51:12'),
(5, 'dffdg', '2022-06', 'Higher Secondary', 'gdfb', 'Commerce', 1, '2022-07-23 23:54:01', '2022-07-23 23:54:01'),
(6, 'dffdg', '2022-06', 'Higher Secondary', 'gdfb', 'Commerce', 1, '2022-07-23 23:56:25', '2022-07-23 23:56:25'),
(7, 'dffdg', '2022-06', 'Higher Secondary', 'gdfb', 'Commerce', 1, '2022-07-23 23:57:33', '2022-07-23 23:57:33'),
(8, 'dffdg', '2022-06', 'Higher Secondary', 'gdfb', 'Commerce', 2, '2022-07-24 00:03:13', '2022-07-24 00:03:13'),
(9, 'fgjh', '2022-07', 'Higher Secondary', 'dfhj', 'Commerce', 3, '2022-07-26 04:23:39', '2022-07-26 04:23:39'),
(10, 'fgjh', '2022-07', 'Higher Secondary', 'dfhj', 'Commerce', 3, '2022-07-26 04:26:30', '2022-07-26 04:26:30'),
(11, 'fgjh', '2022-07', 'Higher Secondary', 'dfhj', 'Commerce', 3, '2022-07-26 04:29:51', '2022-07-26 04:29:51'),
(12, 'fgjh', '2022-07', 'Higher Secondary', 'dfhj', 'Commerce', 3, '2022-07-26 04:32:28', '2022-07-26 04:32:28'),
(13, 'fgjh', '2022-07', 'Higher Secondary', 'dfhj', 'Commerce', 6, '2022-07-26 04:48:38', '2022-07-26 04:48:38'),
(14, 'fgjh', '2022-07', 'Higher Secondary', 'dfhj', 'Commerce', 6, '2022-07-26 04:49:08', '2022-07-26 04:49:08'),
(15, 'fgjh', '2022-07', 'Higher Secondary', 'dfhj', 'Commerce', 6, '2022-07-26 04:51:28', '2022-07-26 04:51:28'),
(16, 'fgjh', '2022-07', 'Higher Secondary', 'dfhj', 'Commerce', 6, '2022-07-26 04:55:22', '2022-07-26 04:55:22'),
(17, 'df', '2022-07', 'Secondary', 'fd', 'Commerce', 8, '2022-07-26 05:02:14', '2022-07-26 05:02:14'),
(18, 'df', '2022-07', 'Secondary', 'fd', 'Commerce', 8, '2022-07-26 05:03:16', '2022-07-26 05:03:16'),
(19, 'fd', '2022-07', 'Higher Secondary', 'dg', 'Arts', 10, '2022-07-26 05:17:05', '2022-07-26 05:17:05'),
(20, 'tshtsrh egg4re wgre', '2022-04', 'Secondary', 'ergergregr  gfbndbdbf', 'Arts', 11, '2022-07-26 05:37:25', '2022-07-26 05:37:25'),
(21, 'tshtsrh egg4re wgre', '2022-04', 'Secondary', 'ergergregr  gfbndbdbf', 'Arts', 14, '2022-07-26 05:43:08', '2022-07-26 05:43:08'),
(22, 'tshtsrh egg4re wgre', '2022-04', 'Secondary', 'ergergregr  gfbndbdbf', 'Arts', 15, '2022-07-26 05:43:56', '2022-07-26 05:43:56'),
(23, 'tshtsrh egg4re wgre', '2022-04', 'Secondary', 'ergergregr  gfbndbdbf', 'Arts', 17, '2022-07-26 05:45:44', '2022-07-26 05:45:44'),
(24, 'tshtsrh egg4re wgre', '2022-04', 'Secondary', 'ergergregr  gfbndbdbf', 'Arts', 21, '2022-07-26 05:54:18', '2022-07-26 05:54:18'),
(25, 'tshtsrh egg4re wgre', '2022-04', 'Secondary', 'ergergregr  gfbndbdbf', 'Arts', 24, '2022-07-26 05:55:41', '2022-07-26 05:55:41'),
(26, 'Ideal School & College', '2022-02', 'Higher Secondary', 'Dhaka', 'Commerce', 23, '2022-07-26 07:03:03', '2022-07-26 07:03:03'),
(27, 'svdsdvsvs', '2022-06', 'Secondary', 'gehh', 'Commerce', 24, '2022-07-26 07:18:47', '2022-07-26 07:18:47'),
(28, 'htrhnnh', '2022-03', 'Secondary', 'trhtrh', 'Commerce', 25, '2022-08-11 01:42:37', '2022-08-11 01:42:37'),
(29, 'htrhnnh', '2022-03', 'Secondary', 'trhtrh', 'Commerce', 26, '2022-08-11 01:49:05', '2022-08-11 01:49:05'),
(30, 'htrhnnh', '2022-03', 'Secondary', 'trhtrh', 'Commerce', 27, '2022-08-11 01:50:47', '2022-08-11 01:50:47'),
(31, 'New York International School', '2005-01', 'Secondary', 'New York', 'Science', 28, '2022-08-11 03:28:14', '2022-08-11 03:28:14'),
(32, 'New York International College', '2007-06', 'Higher Secondary', 'New York', 'Science', 28, '2022-08-11 03:28:14', '2022-08-11 03:28:14'),
(33, 'New York University', '2013-01', 'Bachelor Honors', 'New York', 'Physics', 28, '2022-08-11 03:28:14', '2022-08-11 03:28:14'),
(34, 'New York International School', '2005-01', 'Secondary', 'New York', 'Science', 29, '2022-08-11 04:37:04', '2022-08-11 04:37:04'),
(35, 'New York International College', '2007-06', 'Higher Secondary', 'New York', 'Science', 29, '2022-08-11 04:37:04', '2022-08-11 04:37:04'),
(36, 'New York University', '2013-01', 'Bachelor Honors', 'New York', 'Physics', 29, '2022-08-11 04:37:04', '2022-08-11 04:37:04'),
(37, 'New York International School', '2005-01', 'Secondary', 'New York', 'Science', 29, '2022-08-11 04:40:30', '2022-08-11 04:40:30'),
(38, 'New York International College', '2007-06', 'Higher Secondary', 'New York', 'Science', 29, '2022-08-11 04:40:31', '2022-08-11 04:40:31'),
(39, 'New York University', '2013-01', 'Bachelor Honors', 'New York', 'Physics', 29, '2022-08-11 04:40:31', '2022-08-11 04:40:31'),
(40, 'New York International School', '2005-01', 'Secondary', 'New York', 'Science', 29, '2022-08-11 04:46:00', '2022-08-11 04:46:00'),
(41, 'New York International College', '2007-06', 'Higher Secondary', 'New York', 'Science', 29, '2022-08-11 04:46:00', '2022-08-11 04:46:00'),
(42, 'New York University', '2013-01', 'Bachelor Honors', 'New York', 'Physics', 29, '2022-08-11 04:46:00', '2022-08-11 04:46:00'),
(43, 'New York International School', '2005-01', 'Secondary', 'New York', 'Science', 29, '2022-08-11 04:47:27', '2022-08-11 04:47:27'),
(44, 'New York International College', '2007-06', 'Higher Secondary', 'New York', 'Science', 29, '2022-08-11 04:47:28', '2022-08-11 04:47:28'),
(45, 'New York University', '2013-01', 'Bachelor Honors', 'New York', 'Physics', 29, '2022-08-11 04:47:28', '2022-08-11 04:47:28'),
(46, 'New York International School', '2005-01', 'Secondary', 'New York', 'Science', 29, '2022-08-11 04:48:55', '2022-08-11 04:48:55'),
(47, 'New York International College', '2007-06', 'Higher Secondary', 'New York', 'Science', 29, '2022-08-11 04:48:55', '2022-08-11 04:48:55'),
(48, 'New York University', '2013-01', 'Bachelor Honors', 'New York', 'Physics', 29, '2022-08-11 04:48:55', '2022-08-11 04:48:55'),
(49, 'New York International School', '2005-01', 'Secondary', 'New York', 'Science', 29, '2022-08-11 04:49:57', '2022-08-11 04:49:57'),
(50, 'New York International College', '2007-06', 'Higher Secondary', 'New York', 'Science', 29, '2022-08-11 04:49:57', '2022-08-11 04:49:57'),
(51, 'New York University', '2013-01', 'Bachelor Honors', 'New York', 'Physics', 29, '2022-08-11 04:49:57', '2022-08-11 04:49:57'),
(52, 'New York International School', '2005-01', 'Secondary', 'New York', 'Science', 29, '2022-08-11 04:52:22', '2022-08-11 04:52:22'),
(53, 'New York International College', '2007-06', 'Higher Secondary', 'New York', 'Science', 29, '2022-08-11 04:52:23', '2022-08-11 04:52:23'),
(54, 'New York University', '2013-01', 'Bachelor Honors', 'New York', 'Physics', 29, '2022-08-11 04:52:23', '2022-08-11 04:52:23'),
(55, 'New York International School', '2005-01', 'Secondary', 'New York', 'Science', 29, '2022-08-11 04:53:32', '2022-08-11 04:53:32'),
(56, 'New York International College', '2007-06', 'Higher Secondary', 'New York', 'Science', 29, '2022-08-11 04:53:32', '2022-08-11 04:53:32'),
(57, 'New York University', '2013-01', 'Bachelor Honors', 'New York', 'Physics', 29, '2022-08-11 04:53:32', '2022-08-11 04:53:32');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2022_06_20_052700_create_cvdata_table', 1),
(3, '2022_06_20_055823_create_siblingdata_table', 1),
(4, '2022_06_20_061537_create_edu_qualificationdata_table', 1),
(5, '2022_06_20_064942_create_preferencedata_table', 1),
(6, '2022_07_21_061554_create_contact_table', 1),
(7, '2022_07_21_125418_create_professionaldata_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `preferencedata`
--

CREATE TABLE `preferencedata` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `preference` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvdata_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `preferencedata`
--

INSERT INTO `preferencedata` (`id`, `preference`, `cvdata_id`, `created_at`, `updated_at`) VALUES
(1, 'Single', 1, '2022-07-23 06:28:21', '2022-07-23 06:28:21'),
(2, 'Divorce', 1, '2022-07-23 06:28:21', '2022-07-23 06:28:21'),
(3, 'Single', 1, '2022-07-23 23:27:18', '2022-07-23 23:27:18'),
(4, 'Divorce without child', 1, '2022-07-23 23:27:18', '2022-07-23 23:27:18'),
(5, 'Single', 1, '2022-07-23 23:47:05', '2022-07-23 23:47:05'),
(6, 'Divorce without child', 1, '2022-07-23 23:47:05', '2022-07-23 23:47:05'),
(7, 'Single', 1, '2022-07-23 23:51:12', '2022-07-23 23:51:12'),
(8, 'Divorce', 1, '2022-07-23 23:51:12', '2022-07-23 23:51:12'),
(9, 'Single', 1, '2022-07-23 23:54:00', '2022-07-23 23:54:00'),
(10, 'Divorce', 1, '2022-07-23 23:54:00', '2022-07-23 23:54:00'),
(11, 'Single', 1, '2022-07-23 23:56:25', '2022-07-23 23:56:25'),
(12, 'Divorce', 1, '2022-07-23 23:56:25', '2022-07-23 23:56:25'),
(13, 'Single', 1, '2022-07-23 23:57:33', '2022-07-23 23:57:33'),
(14, 'Divorce', 1, '2022-07-23 23:57:33', '2022-07-23 23:57:33'),
(15, 'Single', 2, '2022-07-24 00:03:13', '2022-07-24 00:03:13'),
(16, 'Divorce', 2, '2022-07-24 00:03:13', '2022-07-24 00:03:13'),
(17, 'Divorce with child', 3, '2022-07-26 04:23:38', '2022-07-26 04:23:38'),
(18, 'Divorce with child', 3, '2022-07-26 04:26:30', '2022-07-26 04:26:30'),
(19, 'Divorce with child', 3, '2022-07-26 04:29:51', '2022-07-26 04:29:51'),
(20, 'Divorce with child', 3, '2022-07-26 04:32:28', '2022-07-26 04:32:28'),
(21, 'Divorce with child', 6, '2022-07-26 04:48:37', '2022-07-26 04:48:37'),
(22, 'Divorce with child', 6, '2022-07-26 04:49:08', '2022-07-26 04:49:08'),
(23, 'Divorce with child', 6, '2022-07-26 04:51:28', '2022-07-26 04:51:28'),
(24, 'Divorce with child', 6, '2022-07-26 04:55:22', '2022-07-26 04:55:22'),
(25, 'Single', 8, '2022-07-26 05:02:14', '2022-07-26 05:02:14'),
(26, 'Single', 8, '2022-07-26 05:03:16', '2022-07-26 05:03:16'),
(27, 'Single', 10, '2022-07-26 05:17:05', '2022-07-26 05:17:05'),
(28, 'Single', 11, '2022-07-26 05:37:25', '2022-07-26 05:37:25'),
(29, 'Divorce', 11, '2022-07-26 05:37:25', '2022-07-26 05:37:25'),
(30, 'Single', 14, '2022-07-26 05:43:07', '2022-07-26 05:43:07'),
(31, 'Divorce', 14, '2022-07-26 05:43:08', '2022-07-26 05:43:08'),
(32, 'Single', 15, '2022-07-26 05:43:56', '2022-07-26 05:43:56'),
(33, 'Divorce', 15, '2022-07-26 05:43:56', '2022-07-26 05:43:56'),
(34, 'Single', 17, '2022-07-26 05:45:43', '2022-07-26 05:45:43'),
(35, 'Divorce', 17, '2022-07-26 05:45:43', '2022-07-26 05:45:43'),
(36, 'Single', 21, '2022-07-26 05:54:18', '2022-07-26 05:54:18'),
(37, 'Divorce', 21, '2022-07-26 05:54:18', '2022-07-26 05:54:18'),
(38, 'Single', 22, '2022-07-26 05:55:41', '2022-07-26 05:55:41'),
(39, 'Divorce', 22, '2022-07-26 05:55:41', '2022-07-26 05:55:41'),
(40, 'Single', 23, '2022-07-26 07:03:03', '2022-07-26 07:03:03'),
(41, 'Divorce', 23, '2022-07-26 07:03:03', '2022-07-26 07:03:03'),
(42, 'Divorce without child', 23, '2022-07-26 07:03:03', '2022-07-26 07:03:03'),
(43, 'Single', 24, '2022-07-26 07:18:47', '2022-07-26 07:18:47'),
(44, 'Divorce', 24, '2022-07-26 07:18:47', '2022-07-26 07:18:47'),
(45, 'Single', 25, '2022-08-11 01:42:36', '2022-08-11 01:42:36'),
(46, 'Single', 26, '2022-08-11 01:49:05', '2022-08-11 01:49:05'),
(47, 'Single', 27, '2022-08-11 01:50:47', '2022-08-11 01:50:47'),
(48, 'Single', 28, '2022-08-11 03:28:14', '2022-08-11 03:28:14'),
(49, 'Divorce', 28, '2022-08-11 03:28:14', '2022-08-11 03:28:14'),
(50, 'Single', 29, '2022-08-11 04:37:04', '2022-08-11 04:37:04'),
(51, 'Divorce', 29, '2022-08-11 04:37:04', '2022-08-11 04:37:04'),
(52, 'Single', 29, '2022-08-11 04:40:30', '2022-08-11 04:40:30'),
(53, 'Divorce', 29, '2022-08-11 04:40:30', '2022-08-11 04:40:30'),
(54, 'Single', 29, '2022-08-11 04:45:59', '2022-08-11 04:45:59'),
(55, 'Divorce', 29, '2022-08-11 04:46:00', '2022-08-11 04:46:00'),
(56, 'Single', 29, '2022-08-11 04:47:27', '2022-08-11 04:47:27'),
(57, 'Divorce', 29, '2022-08-11 04:47:27', '2022-08-11 04:47:27'),
(58, 'Single', 29, '2022-08-11 04:48:54', '2022-08-11 04:48:54'),
(59, 'Divorce', 29, '2022-08-11 04:48:54', '2022-08-11 04:48:54'),
(60, 'Single', 29, '2022-08-11 04:49:56', '2022-08-11 04:49:56'),
(61, 'Divorce', 29, '2022-08-11 04:49:56', '2022-08-11 04:49:56'),
(62, 'Single', 29, '2022-08-11 04:52:22', '2022-08-11 04:52:22'),
(63, 'Divorce', 29, '2022-08-11 04:52:22', '2022-08-11 04:52:22'),
(64, 'Single', 29, '2022-08-11 04:53:31', '2022-08-11 04:53:31'),
(65, 'Divorce', 29, '2022-08-11 04:53:31', '2022-08-11 04:53:31');

-- --------------------------------------------------------

--
-- Table structure for table `professionaldata`
--

CREATE TABLE `professionaldata` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `designation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `organizationName` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `com_department` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `com_location` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_employment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `to_employment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `com_reference` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvdata_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `professionaldata`
--

INSERT INTO `professionaldata` (`id`, `designation`, `organizationName`, `com_department`, `com_location`, `from_employment`, `to_employment`, `com_reference`, `cvdata_id`, `created_at`, `updated_at`) VALUES
(1, 'Manager', 'Brack', 'nGGGG', 'Dhaka', '2022-07-05', 'Currently working here', 'hh jhjkkjerbgkbjekvjbvejkbjlerber', 1, '2022-07-23 06:28:22', '2022-07-23 06:28:22'),
(2, 'Doctor', 'dsv', 'dvsvd', 'dvdvd', '2022-07-11', 'Currently working here', 'dsvdsvsdvds', 2, '2022-07-23 23:27:18', '2022-07-23 23:27:18'),
(3, 'Doctor', 'dsv', 'dvsvd', 'dvdvd', '2022-07-11', 'Currently working here', 'dsvdsvsdvds', 9, '2022-07-23 23:47:06', '2022-07-23 23:47:06'),
(4, 'rgg', 'sgeges', 'esgesg', 'gsesegsge', '2022-06-27', 'Currently working here', 'esgvsefgs', 20, '2022-07-23 23:51:12', '2022-07-23 23:51:12'),
(5, 'rgg', 'sgeges', 'esgesg', 'gsesegsge', '2022-06-27', 'Currently working here', 'esgvsefgs', 4, '2022-07-23 23:54:01', '2022-07-23 23:54:01'),
(6, 'rgg', 'sgeges', 'esgesg', 'gsesegsge', '2022-06-27', 'Currently working here', 'esgvsefgs', 19, '2022-07-23 23:56:25', '2022-07-23 23:56:25'),
(7, 'rgg', 'sgeges', 'esgesg', 'gsesegsge', '2022-06-27', 'Currently working here', 'esgvsefgs', 22, '2022-07-23 23:57:33', '2022-07-23 23:57:33'),
(8, 'rgg', 'sgeges', 'esgesg', 'gsesegsge', '2022-06-27', 'Currently working here', 'esgvsefgs', 3, '2022-07-24 00:03:13', '2022-07-24 00:03:13'),
(9, 'sgdf', 'sadf', 'dfg', 'dfg', '2022-07-26', '2022-07-26', 'fdg', 23, '2022-07-26 04:23:39', '2022-07-26 04:23:39'),
(10, 'sgdf', 'sadf', 'dfg', 'dfg', '2022-07-26', '2022-07-26', 'fdg', 18, '2022-07-26 04:26:30', '2022-07-26 04:26:30'),
(11, 'sgdf', 'sadf', 'dfg', 'dfg', '2022-07-26', '2022-07-26', 'fdg', 5, '2022-07-26 04:29:51', '2022-07-26 04:29:51'),
(12, 'sgdf', 'sadf', 'dfg', 'dfg', '2022-07-26', '2022-07-26', 'fdg', 5, '2022-07-26 04:32:28', '2022-07-26 04:32:28'),
(13, 'sgdf', 'sadf', 'dfg', 'dfg', '2022-07-26', '2022-07-26', 'fdg', 1, '2022-07-26 04:48:38', '2022-07-26 04:48:38'),
(14, 'sgdf', 'sadf', 'dfg', 'dfg', '2022-07-26', '2022-07-26', 'fdg', 16, '2022-07-26 04:49:08', '2022-07-26 04:49:08'),
(15, 'sgdf', 'sadf', 'dfg', 'dfg', '2022-07-26', '2022-07-26', 'fdg', 7, '2022-07-26 04:51:28', '2022-07-26 04:51:28'),
(16, 'sgdf', 'sadf', 'dfg', 'dfg', '2022-07-26', '2022-07-26', 'fdg', 13, '2022-07-26 04:55:22', '2022-07-26 04:55:22'),
(17, 'df', 'df', 'df', 'df', '2022-07-26', '2022-07-26', 'ghgf', 8, '2022-07-26 05:02:14', '2022-07-26 05:02:14'),
(18, 'df', 'df', 'df', 'df', '2022-07-26', '2022-07-26', 'ghgf', 12, '2022-07-26 05:03:16', '2022-07-26 05:03:16'),
(19, 'sdgfg', 'fdgd', 'dg', 'dg', '2022-07-26', '2022-07-26', 'fg', 10, '2022-07-26 05:17:05', '2022-07-26 05:17:05'),
(20, 'nfrnfn', 'erhhe', 'gre', 'ergrge', '2022-06-28', 'Currently working here', 'rgeergg', 11, '2022-07-26 05:37:25', '2022-07-26 05:37:25'),
(21, 'nfrnfn', 'erhhe', 'gre', 'ergrge', '2022-06-28', 'Currently working here', 'rgeergg', 14, '2022-07-26 05:43:08', '2022-07-26 05:43:08'),
(22, 'nfrnfn', 'erhhe', 'gre', 'ergrge', '2022-06-28', 'Currently working here', 'rgeergg', 15, '2022-07-26 05:43:56', '2022-07-26 05:43:56'),
(23, 'nfrnfn', 'erhhe', 'gre', 'ergrge', '2022-06-28', 'Currently working here', 'rgeergg', 17, '2022-07-26 05:45:44', '2022-07-26 05:45:44'),
(24, 'nfrnfn', 'erhhe', 'gre', 'ergrge', '2022-06-28', 'Currently working here', 'rgeergg', 21, '2022-07-26 05:54:18', '2022-07-26 05:54:18'),
(30, 'rthrth', 'thrth', 'hrt', 'hrt', '2022-08-03', 'Currently working here', 'ththjnrtjhnrthnrtnn', 25, '2022-08-11 01:42:37', '2022-08-11 01:42:37'),
(31, 'rthrth', 'thrth', 'hrt', 'hrt', '2022-08-03', 'Currently working here', 'ththjnrtjhnrthnrtnn', 26, '2022-08-11 01:49:06', '2022-08-11 01:49:06'),
(32, 'rthrth', 'thrth', 'hrt', 'hrt', '2022-08-03', 'Currently working here', 'ththjnrtjhnrthnrtnn', 27, '2022-08-11 01:50:47', '2022-08-11 01:50:47'),
(33, 'Senior Engineer', 'FAGS United', 'Technical Support', 'California, USA', '2018-03-02', 'Currently working here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 28, '2022-08-11 03:28:14', '2022-08-11 03:28:14'),
(34, 'Junior Engineer', 'Air CON USA Limited', 'Department of IT', 'Washington, USA', '2012-01-11', '2018-01-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 28, '2022-08-11 03:28:14', '2022-08-11 03:28:14'),
(35, 'Senior Engineer', 'FAGS United', 'Technical Support', 'California, USA', '2018-03-02', 'Currently working here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:37:05', '2022-08-11 04:37:05'),
(36, 'Junior Engineer', 'Air CON USA Limited', 'Department of IT', 'Washington, USA', '2012-01-11', '2018-01-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:37:05', '2022-08-11 04:37:05'),
(37, 'Senior Engineer', 'FAGS United', 'Technical Support', 'California, USA', '2018-03-02', 'Currently working here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:40:31', '2022-08-11 04:40:31'),
(38, 'Junior Engineer', 'Air CON USA Limited', 'Department of IT', 'Washington, USA', '2012-01-11', '2018-01-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:40:31', '2022-08-11 04:40:31'),
(39, 'Senior Engineer', 'FAGS United', 'Technical Support', 'California, USA', '2018-03-02', 'Currently working here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:46:00', '2022-08-11 04:46:00'),
(40, 'Junior Engineer', 'Air CON USA Limited', 'Department of IT', 'Washington, USA', '2012-01-11', '2018-01-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:46:00', '2022-08-11 04:46:00'),
(41, 'Senior Engineer', 'FAGS United', 'Technical Support', 'California, USA', '2018-03-02', 'Currently working here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:47:28', '2022-08-11 04:47:28'),
(42, 'Junior Engineer', 'Air CON USA Limited', 'Department of IT', 'Washington, USA', '2012-01-11', '2018-01-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:47:28', '2022-08-11 04:47:28'),
(43, 'Senior Engineer', 'FAGS United', 'Technical Support', 'California, USA', '2018-03-02', 'Currently working here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:48:55', '2022-08-11 04:48:55'),
(44, 'Junior Engineer', 'Air CON USA Limited', 'Department of IT', 'Washington, USA', '2012-01-11', '2018-01-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:48:55', '2022-08-11 04:48:55'),
(45, 'Senior Engineer', 'FAGS United', 'Technical Support', 'California, USA', '2018-03-02', 'Currently working here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:49:57', '2022-08-11 04:49:57'),
(46, 'Junior Engineer', 'Air CON USA Limited', 'Department of IT', 'Washington, USA', '2012-01-11', '2018-01-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:49:57', '2022-08-11 04:49:57'),
(47, 'Senior Engineer', 'FAGS United', 'Technical Support', 'California, USA', '2018-03-02', 'Currently working here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:52:23', '2022-08-11 04:52:23'),
(48, 'Junior Engineer', 'Air CON USA Limited', 'Department of IT', 'Washington, USA', '2012-01-11', '2018-01-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:52:23', '2022-08-11 04:52:23'),
(49, 'Senior Engineer', 'FAGS United', 'Technical Support', 'California, USA', '2018-03-02', 'Currently working here', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:53:32', '2022-08-11 04:53:32'),
(50, 'Junior Engineer', 'Air CON USA Limited', 'Department of IT', 'Washington, USA', '2012-01-11', '2018-01-11', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.', 29, '2022-08-11 04:53:32', '2022-08-11 04:53:32');

-- --------------------------------------------------------

--
-- Table structure for table `siblingdata`
--

CREATE TABLE `siblingdata` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ocupation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvdata_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `siblingdata`
--

INSERT INTO `siblingdata` (`id`, `name`, `ocupation`, `details`, `cvdata_id`, `created_at`, `updated_at`) VALUES
(1, 'regrweg', 'regerr', 'rrrrgrereregreg', 1, '2022-07-23 06:28:21', '2022-07-23 06:28:21'),
(2, 'dsvdsv', 'dsvdsv', 'dsvdsdsdvs', 1, '2022-07-23 23:27:18', '2022-07-23 23:27:18'),
(3, 'dsvdsv', 'dsvdsv', 'dsvdsdsdvs', 1, '2022-07-23 23:47:06', '2022-07-23 23:47:06'),
(4, 'segf', 'egeg', 'egsegssgese', 1, '2022-07-23 23:51:12', '2022-07-23 23:51:12'),
(5, 'segf', 'egeg', 'egsegssgese', 1, '2022-07-23 23:54:00', '2022-07-23 23:54:00'),
(6, 'segf', 'egeg', 'egsegssgese', 1, '2022-07-23 23:56:25', '2022-07-23 23:56:25'),
(7, 'segf', 'egeg', 'egsegssgese', 1, '2022-07-23 23:57:33', '2022-07-24 06:01:33'),
(8, 'segf', 'egeg', 'egsegssgese', 2, '2022-07-24 00:03:13', '2022-07-24 00:03:13'),
(9, 'dfg', 'dg', 'dgf', 3, '2022-07-26 04:23:38', '2022-07-26 04:23:38'),
(10, 'dfg', 'dg', 'dgf', 3, '2022-07-26 04:26:30', '2022-07-26 04:26:30'),
(11, 'dfg', 'dg', 'dgf', 3, '2022-07-26 04:29:51', '2022-07-26 04:29:51'),
(12, 'dfg', 'dg', 'dgf', 3, '2022-07-26 04:32:28', '2022-07-26 04:32:28'),
(13, 'dfg', 'dg', 'dgf', 6, '2022-07-26 04:48:37', '2022-07-26 04:48:37'),
(14, 'dfg', 'dg', 'dgf', 6, '2022-07-26 04:49:08', '2022-07-26 04:49:08'),
(15, 'dfg', 'dg', 'dgf', 6, '2022-07-26 04:51:28', '2022-07-26 04:51:28'),
(16, 'dfg', 'dg', 'dgf', 6, '2022-07-26 04:55:22', '2022-07-26 04:55:22'),
(17, 'g', 'g', 'g', 8, '2022-07-26 05:02:14', '2022-07-26 05:02:14'),
(18, 'g', 'g', 'g', 8, '2022-07-26 05:03:16', '2022-07-26 05:03:16'),
(19, 'dg', 'dg', 'dg', 10, '2022-07-26 05:17:05', '2022-07-26 05:17:05'),
(20, 'dsvdsvds', 'dsvdsdsv', 'sdvdvsdvdv', 11, '2022-07-26 05:37:25', '2022-07-26 05:37:25'),
(21, 'dsvdsvds', 'dsvdsdsv', 'sdvdvsdvdv', 14, '2022-07-26 05:43:08', '2022-07-26 05:43:08'),
(22, 'dsvdsvds', 'dsvdsdsv', 'sdvdvsdvdv', 15, '2022-07-26 05:43:56', '2022-07-26 05:43:56'),
(23, 'dsvdsvds', 'dsvdsdsv', 'sdvdvsdvdv', 17, '2022-07-26 05:45:44', '2022-07-26 05:45:44'),
(24, 'dsvdsvds', 'dsvdsdsv', 'sdvdvsdvdv', 21, '2022-07-26 05:54:18', '2022-07-26 05:54:18'),
(25, 'dsvdsvds', 'dsvdsdsv', 'sdvdvsdvdv', 22, '2022-07-26 05:55:41', '2022-07-26 05:55:41'),
(26, 'vewwevevw', 'veewvewvewv', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 23, '2022-07-26 07:03:03', '2022-07-26 07:03:03'),
(27, 'ecfewvwevv', 'ewvwevwev', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', 23, '2022-07-26 07:03:03', '2022-07-26 07:03:03'),
(28, 'ynytntyn', 'nytn', 'phoneffi4rfvbjbvrere', 24, '2022-07-26 07:18:47', '2022-07-26 07:18:47'),
(29, 'thtrht', 'ththth', 'ththrthrh', 25, '2022-08-11 01:42:37', '2022-08-11 01:42:37'),
(30, 'thtrht', 'ththth', 'ththrthrh', 26, '2022-08-11 01:49:05', '2022-08-11 01:49:05'),
(31, 'thtrht', 'ththth', 'ththrthrh', 27, '2022-08-11 01:50:47', '2022-08-11 01:50:47'),
(32, 'Jon Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 28, '2022-08-11 03:28:14', '2022-08-11 03:28:14'),
(33, 'Liyla Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 28, '2022-08-11 03:28:14', '2022-08-11 03:28:14'),
(34, 'Jon Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:37:04', '2022-08-11 04:37:04'),
(35, 'Liyla Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:37:04', '2022-08-11 04:37:04'),
(36, 'Jon Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:40:30', '2022-08-11 04:40:30'),
(37, 'Liyla Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:40:30', '2022-08-11 04:40:30'),
(38, 'Jon Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:46:00', '2022-08-11 04:46:00'),
(39, 'Liyla Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:46:00', '2022-08-11 04:46:00'),
(40, 'Jon Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:47:27', '2022-08-11 04:47:27'),
(41, 'Liyla Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:47:27', '2022-08-11 04:47:27'),
(42, 'Jon Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:48:55', '2022-08-11 04:48:55'),
(43, 'Liyla Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:48:55', '2022-08-11 04:48:55'),
(44, 'Jon Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:49:57', '2022-08-11 04:49:57'),
(45, 'Liyla Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:49:57', '2022-08-11 04:49:57'),
(46, 'Jon Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:52:22', '2022-08-11 04:52:22'),
(47, 'Liyla Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:52:22', '2022-08-11 04:52:22'),
(48, 'Jon Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:53:31', '2022-08-11 04:53:31'),
(49, 'Liyla Jackson', 'Student', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 29, '2022-08-11 04:53:31', '2022-08-11 04:53:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cvdata`
--
ALTER TABLE `cvdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `edu_qualificationdata`
--
ALTER TABLE `edu_qualificationdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `preferencedata`
--
ALTER TABLE `preferencedata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `professionaldata`
--
ALTER TABLE `professionaldata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `siblingdata`
--
ALTER TABLE `siblingdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cvdata`
--
ALTER TABLE `cvdata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `edu_qualificationdata`
--
ALTER TABLE `edu_qualificationdata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `preferencedata`
--
ALTER TABLE `preferencedata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `professionaldata`
--
ALTER TABLE `professionaldata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `siblingdata`
--
ALTER TABLE `siblingdata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
