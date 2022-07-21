-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2022 at 02:06 PM
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
  `id` bigint(20) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `question` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `question`, `created_at`, `updated_at`) VALUES
(1, 'Abdullah Isha', 'shahriarisha490@gmail.com', 'I have a valid question.\nNow I am telling.....', '2022-07-21 01:35:09', '2022-07-21 01:35:09'),
(2, 'Abdullah Isha', 'admin@butterflymatrimonial.com', 'I have a valid reason here.', '2022-07-21 01:38:54', '2022-07-21 01:38:54');

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
  `designation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `organizationName` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `com_department` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `com_location` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_employment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `to_employment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `com_reference` text COLLATE utf8mb4_unicode_ci NOT NULL,
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

INSERT INTO `cvdata` (`id`, `image`, `name`, `gender`, `phone`, `religion`, `email`, `presentAddress`, `divisionPresent`, `dristrictPresent`, `parmanentAddress`, `divisionParmanent`, `dristrictParmanent`, `age`, `specialCase`, `spousePreference`, `about`, `height`, `weight`, `bloodGroup`, `grownUpAt`, `specialCondition`, `designation`, `organizationName`, `com_department`, `com_location`, `from_employment`, `to_employment`, `com_reference`, `fatherName`, `fatherOcupation`, `motherName`, `motherOcupation`, `maritalStatus`, `created_at`, `updated_at`) VALUES
(1, 'uploads/images/logo192.png', 'Md. Sheikh Jamal ', 'Male', '01762851793', 'Muslim', 'sheikhjamal@gmail.com', '83/A South Mohammedpur', 'Dhaka', 'Dhaka', '83/A South Mohammedpur', 'Dhaka', 'Dhaka', '1994-07-22', 'Diabetics', 'Single', 'আবহাওয়া রাশিফল লাইফস্টাইল বিশেষ বিধানসভা নির্বাচন পশ্চিমবঙ্গ সাফল্যের কাহিনি', '5ft 2', 64, 'A+', 'Bangladesh', 'lorem ispm hsghdv ygedgd ygfcdfvde uggwdeb. hgqwedyg yeeye jehye bjhje. dfjfwjw qjbdswv wqhjwwq hgdwsvhwqh wqhwuebvdvh bjdwqg.', 'Employee', 'Swop', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'Md. Johor Ali', 'Gov. Service', 'Mrs. Hfsfsc Bahata', 'House wife', 'Unmarred', '2022-06-01 12:25:35', '2022-06-01 12:25:48'),
(2, 'uploads/images/logo192.png', 'Abdullah Esha', 'Male', '017262728827', 'Muslim', 'ewwdxyfu@gmail.com', 'gquwxguxbj', 'gquwxguxbj', 'gquwxguxbj', 'gquwxguxbj', 'gquwxguxbj', 'gquwxguxbj', '1994-07-22', 'Smoker', 'Job', 'gquwxguxbj gquwxguxbj gquwxguxbj', '5ft 9', 63, 'A+', 'Bangladesh', 'gquwxguxbj gquwxguxbj gquwxguxbj', 'gquwxguxbj gquwxguxbj', 'gquwxguxbj gquwxguxbj', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'gquwxguxbj gquwxguxbj', 'gquwxguxbj gquwxguxbj', 'gquwxguxbj', 'gquwxguxbj', 'Unmarried', '2022-06-22 00:45:43', '2022-06-22 00:45:43'),
(3, 'uploads/images/logo192.png', 'Abdullah Esha', 'Male', '0152762762', 'Muslim', 'ahdhadvh@gmail.com', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', '1994-07-22', 'Diabetics', 'Job', 'fyfdfafghjajdhg', '5ft 7', 63, 'A+', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'fyfdfafghjajdhg', 'Unmarried', '2022-06-25 05:14:37', '2022-06-25 05:14:37'),
(4, 'uploads/images/logo512.png', 'teaghaega', 'Male', '143157677', 'Buddhist', 'teaghaega@gmail.com', 'teaghaega', 'teaghaega', 'teaghaega', 'teaghaega', 'teaghaega', 'teaghaega', '1994-07-22', 'Smoker', 'Job', 'teaghaega teaghaega teaghaega', '5ft 8', 58, 'B+', 'teaghaega', 'teaghaega teaghaega teaghaega teaghaega', 'teaaega aghaega', 'teaghega teaega  teaghaega', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'teaghaega', 'teaghaega', 'teaghaega', 'teaghaega', 'Unmarried', '2022-06-25 05:41:29', '2022-06-25 05:41:29'),
(5, 'uploads/images/card_2.png', 'Ygdahja', 'Male', '018721377813', 'Christian', 'Ygdahja@gmail.com', 'Ygdahja', 'Ygdahja', 'Ygdahja', 'Ygdahja', 'Ygdahja', 'Ygdahja', '1994-07-22', 'Diabetics', 'Job', 'Ygdahja Ygdahja Ygdahja Ygdahja', '5ft 6', 62, 'B-', 'Ygdahja', 'Ygdahja Ygdahja Ygdahja Ygdahja', 'Ygdahja', 'dahja', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'Ygdahja', 'Ygdahja', 'Ygdahja', 'Ygdahja', 'Unmarried', '2022-06-25 05:55:36', '2022-06-25 05:55:36'),
(6, 'uploads/images/team_3.png', 'rgrwegrwgrg', 'Male', '3222222222222', 'Muslim', 'rgrwegrwgrg@gmail.com', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', '1994-07-22', 'Diabetics', 'Job', 'rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg', '5ft 6', 54, 'B-', 'rgrwegrwgrg', 'rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg', 'rgr wegr wgrg', 'grwgrg', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', 'Unmarried', '2022-06-25 23:25:15', '2022-06-25 23:25:15'),
(7, 'uploads/images/team_1.png', 'Salman H Soikot', 'Male', '01542524329', 'Muslim', 'salman@gmail.com', 'Banasree, Block B, Road 4, House 30', 'Dhaka', 'Dhaka', 'Banasree, Block B, Road 4, House 30', 'Dhaka', 'Dhaka', '1994-07-22', 'Diabetics', 'Job', 'If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted. The loop in this example uses a for loop to collect the car names from the cars array.', '5ft 9', 70, 'AB-', 'Bangladesh', 'If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted. The loop in this example uses a for loop to collect the car names from the cars array.', 'Software Engineer', 'Swop Technologies', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'ugegcegke', 'Abdull Aziz', 'Civil Surgeon Rajbari', 'Rokeya Khanom', 'Primary School Teacher', 'Unmarried', '2022-06-30 01:49:57', '2022-06-30 01:49:57');

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
(7, 'Ideal School', '2012-02', 'SSC', 'Dhaka', 'Science', 7, '2022-06-30 01:49:58', '2022-06-30 01:49:58'),
(8, 'BAF Shaheen College', '2014-05', 'SSC', 'Dhaka', 'Science', 7, '2022-06-30 01:49:59', '2022-06-30 01:49:59'),
(9, 'American International University Of Bangladesh', '2019-02', 'HSC', 'Dhaka', 'Science', 7, '2022-06-30 01:49:59', '2022-06-30 01:49:59');

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
(6, '2022_07_21_061554_create_contact_table', 2);

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
(1, 'Single', 1, '2022-06-25 23:40:26', '2022-06-25 23:40:26'),
(2, 'Divorce', 2, '2022-06-25 23:40:26', '2022-06-25 23:40:26'),
(3, 'Divorce', 3, '2022-06-25 23:40:26', '2022-06-25 23:40:26'),
(4, 'Divorce', 4, '2022-06-25 23:40:26', '2022-06-25 23:40:26'),
(5, 'Divorce', 5, '2022-06-25 23:40:26', '2022-06-25 23:40:26'),
(6, 'Divorce', 6, '2022-06-25 23:40:26', '2022-06-25 23:40:26'),
(7, 'Single', 7, '2022-06-30 01:49:58', '2022-06-30 01:49:58'),
(8, 'Divorce', 7, '2022-06-30 01:49:58', '2022-06-30 01:49:58');

-- --------------------------------------------------------

--
-- Table structure for table `siblingdata`
--

CREATE TABLE `siblingdata` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `spouseDetails` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ocupation` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvdata_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `siblingdata`
--

INSERT INTO `siblingdata` (`id`, `name`, `spouseDetails`, `ocupation`, `details`, `cvdata_id`, `created_at`, `updated_at`) VALUES
(1, 'White trgrtg', 'teaghaega', 'teaghaega', 'teaghaega teaghaega teaghaega teaghaega', 1, '2022-06-25 05:41:30', '2022-06-25 05:41:30'),
(2, 'Ygdahja', 'Ygdahja', 'Ygdahja', 'Ygdahja Ygdahja Ygdahja Ygdahja Ygdahja Ygdahja', 2, '2022-06-25 05:55:37', '2022-06-25 05:55:37'),
(3, 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg', 3, '2022-06-25 23:25:17', '2022-06-25 23:25:17'),
(4, 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg', 4, '2022-06-25 23:25:17', '2022-06-25 23:25:17'),
(5, 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg', 5, '2022-06-25 23:25:17', '2022-06-25 23:25:17'),
(6, 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg', 'rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg rgrwegrwgrg', 6, '2022-06-25 23:25:17', '2022-06-25 23:25:17'),
(7, 'Nahian Bin Aziz', 'Younger Brother', 'Student', 'If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted. The loop in this example uses a for loop to collect the car names from the cars array.', 7, '2022-06-30 01:49:58', '2022-06-30 01:49:58');

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cvdata`
--
ALTER TABLE `cvdata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `edu_qualificationdata`
--
ALTER TABLE `edu_qualificationdata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `preferencedata`
--
ALTER TABLE `preferencedata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `siblingdata`
--
ALTER TABLE `siblingdata`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
