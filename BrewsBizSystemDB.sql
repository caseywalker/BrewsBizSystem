USE [master]
GO
/****** Object:  Database [BrewsBizSystem]    Script Date: 12/8/2021 8:49:59 PM ******/
CREATE DATABASE [BrewsBizSystem]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BrewsBizSystem', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\BrewsBizSystem.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BrewsBizSystem_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\BrewsBizSystem_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [BrewsBizSystem] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BrewsBizSystem].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BrewsBizSystem] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET ARITHABORT OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BrewsBizSystem] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BrewsBizSystem] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET  DISABLE_BROKER 
GO
ALTER DATABASE [BrewsBizSystem] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BrewsBizSystem] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET RECOVERY FULL 
GO
ALTER DATABASE [BrewsBizSystem] SET  MULTI_USER 
GO
ALTER DATABASE [BrewsBizSystem] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BrewsBizSystem] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BrewsBizSystem] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BrewsBizSystem] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BrewsBizSystem] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'BrewsBizSystem', N'ON'
GO
ALTER DATABASE [BrewsBizSystem] SET QUERY_STORE = OFF
GO
USE [BrewsBizSystem]
GO
/****** Object:  Table [dbo].[CUSTOMERS]    Script Date: 12/8/2021 8:49:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CUSTOMERS](
	[CustomerID] [uniqueidentifier] NOT NULL,
	[CustomerName] [varchar](50) NULL,
	[CustomerAddress] [varchar](50) NULL,
	[CustomerCity] [varchar](50) NULL,
	[CustomerZipCode] [int] NULL,
	[CustomerState] [varchar](25) NULL,
PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ORDERDETAILS]    Script Date: 12/8/2021 8:49:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ORDERDETAILS](
	[OrderDetailID] [uniqueidentifier] NOT NULL,
	[OrderID] [uniqueidentifier] NOT NULL,
	[ProductID] [uniqueidentifier] NOT NULL,
	[ProductQuantity] [int] NULL,
	[ProductPrice] [decimal](30, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ORDERS]    Script Date: 12/8/2021 8:49:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ORDERS](
	[OrderID] [uniqueidentifier] NOT NULL,
	[UserID] [uniqueidentifier] NOT NULL,
	[CustomerID] [uniqueidentifier] NOT NULL,
	[OrderAmount] [decimal](30, 2) NULL,
	[OrderDate] [date] NULL,
	[Complete] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PRODUCTS]    Script Date: 12/8/2021 8:49:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCTS](
	[ProductID] [uniqueidentifier] NOT NULL,
	[ProductName] [varchar](25) NULL,
	[ProductDescription] [varchar](50) NULL,
	[ProductPrice] [decimal](30, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QUOTEDETAILS]    Script Date: 12/8/2021 8:49:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QUOTEDETAILS](
	[QuoteDetailID] [uniqueidentifier] NOT NULL,
	[QuoteID] [uniqueidentifier] NOT NULL,
	[ProductID] [uniqueidentifier] NOT NULL,
	[ProductQuantity] [int] NULL,
	[ProductPrice] [decimal](30, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[QuoteDetailID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QUOTES]    Script Date: 12/8/2021 8:49:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QUOTES](
	[QuoteID] [uniqueidentifier] NOT NULL,
	[UserID] [uniqueidentifier] NOT NULL,
	[CustomerID] [uniqueidentifier] NOT NULL,
	[QuoteAmount] [decimal](30, 2) NULL,
	[QuoteDate] [date] NULL,
	[Complete] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[QuoteID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[USERS]    Script Date: 12/8/2021 8:49:59 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[USERS](
	[UserID] [uniqueidentifier] NOT NULL,
	[UserUID] [varchar](50) NULL,
	[UserRole] [varchar](25) NULL,
	[UserFirst] [varchar](25) NULL,
	[UserLast] [varchar](25) NULL,
	[UserCompany] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[CUSTOMERS] ([CustomerID], [CustomerName], [CustomerAddress], [CustomerCity], [CustomerZipCode], [CustomerState]) VALUES (N'3f555dc3-df4e-44dd-a167-baa96dd12016', N'Bill''s Biker Bar', N'1 Dirty Ln', N'Nashville', 37206, N'TN')
GO
INSERT [dbo].[CUSTOMERS] ([CustomerID], [CustomerName], [CustomerAddress], [CustomerCity], [CustomerZipCode], [CustomerState]) VALUES (N'7c1a28f6-9ac1-45ca-b59f-c6285549d776', N'Bourbon and Beers', N'404 Main St', N'Nashville', 37206, N'TN')
GO
INSERT [dbo].[CUSTOMERS] ([CustomerID], [CustomerName], [CustomerAddress], [CustomerCity], [CustomerZipCode], [CustomerState]) VALUES (N'de2c66f4-7636-4dbe-83cb-d9ef939ea1e5', N'Craft Brews and Burgers', N'2 Fancy Ct', N'Nashville', 37206, N'TN')
GO
INSERT [dbo].[ORDERDETAILS] ([OrderDetailID], [OrderID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'cdf5694d-4758-4f13-9daf-71ddd5027a85', N'0cc8c109-9052-411d-97dd-9607c1e089e6', N'33a52b72-1cdd-43ee-ad07-3fc2ea2ff690', 3, CAST(8.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[ORDERDETAILS] ([OrderDetailID], [OrderID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'd6e16a6b-b01e-46bd-bd05-71f108454b63', N'7d659738-e73b-403d-8486-ebbfac7553f7', N'7e556faf-cc95-4437-972e-cff66177ffc9', 8, CAST(10.28 AS Decimal(30, 2)))
GO
INSERT [dbo].[ORDERDETAILS] ([OrderDetailID], [OrderID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'077b8915-35a0-46dd-ab63-7591f1f77cb9', N'78845bd6-2b14-4245-8473-206620ce29e8', N'7e556faf-cc95-4437-972e-cff66177ffc9', 3, CAST(10.28 AS Decimal(30, 2)))
GO
INSERT [dbo].[ORDERDETAILS] ([OrderDetailID], [OrderID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'05be8ffb-4a7a-4bb6-ab3d-956cea2c08c5', N'78845bd6-2b14-4245-8473-206620ce29e8', N'98b1a493-af57-4de7-97fa-2d5c77a46463', 2, CAST(12.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[ORDERDETAILS] ([OrderDetailID], [OrderID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'65413500-6910-42f8-bcdd-a359c42ad011', N'7d659738-e73b-403d-8486-ebbfac7553f7', N'5e0101ec-b87c-4ed2-bd6c-3fee20ef8d15', 2, CAST(9.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[ORDERDETAILS] ([OrderDetailID], [OrderID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'063ab619-1ac3-4821-bd4e-cc94ab511fff', N'0cc8c109-9052-411d-97dd-9607c1e089e6', N'f87f175b-a70e-4cdf-848f-4d1a9b85453f', 5, CAST(10.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[ORDERS] ([OrderID], [UserID], [CustomerID], [OrderAmount], [OrderDate], [Complete]) VALUES (N'78845bd6-2b14-4245-8473-206620ce29e8', N'c2773b3b-d8c7-47d6-95cd-36ce2424867b', N'3f555dc3-df4e-44dd-a167-baa96dd12016', CAST(56.82 AS Decimal(30, 2)), CAST(N'2021-12-08' AS Date), 0)
GO
INSERT [dbo].[ORDERS] ([OrderID], [UserID], [CustomerID], [OrderAmount], [OrderDate], [Complete]) VALUES (N'0cc8c109-9052-411d-97dd-9607c1e089e6', N'c2773b3b-d8c7-47d6-95cd-36ce2424867b', N'7c1a28f6-9ac1-45ca-b59f-c6285549d776', CAST(81.92 AS Decimal(30, 2)), CAST(N'2021-12-08' AS Date), 0)
GO
INSERT [dbo].[ORDERS] ([OrderID], [UserID], [CustomerID], [OrderAmount], [OrderDate], [Complete]) VALUES (N'7d659738-e73b-403d-8486-ebbfac7553f7', N'c2773b3b-d8c7-47d6-95cd-36ce2424867b', N'de2c66f4-7636-4dbe-83cb-d9ef939ea1e5', CAST(102.22 AS Decimal(30, 2)), CAST(N'2021-12-08' AS Date), 0)
GO
INSERT [dbo].[PRODUCTS] ([ProductID], [ProductName], [ProductDescription], [ProductPrice]) VALUES (N'98b1a493-af57-4de7-97fa-2d5c77a46463', N'Warner Pale Ale', N'A slightly hoppy pale ale with citrus notes.', CAST(12.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[PRODUCTS] ([ProductID], [ProductName], [ProductDescription], [ProductPrice]) VALUES (N'33a52b72-1cdd-43ee-ad07-3fc2ea2ff690', N'Winter Pale Ale', N'A hoppy ale with a copper color.', CAST(8.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[PRODUCTS] ([ProductID], [ProductName], [ProductDescription], [ProductPrice]) VALUES (N'5e0101ec-b87c-4ed2-bd6c-3fee20ef8d15', N'London Brown', N'A dark amber ale with British roots.', CAST(9.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[PRODUCTS] ([ProductID], [ProductName], [ProductDescription], [ProductPrice]) VALUES (N'f87f175b-a70e-4cdf-848f-4d1a9b85453f', N'Dad''s Coffee Porter', N'A raosty malt porter with a bold coffee aroma.', CAST(10.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[PRODUCTS] ([ProductID], [ProductName], [ProductDescription], [ProductPrice]) VALUES (N'7e556faf-cc95-4437-972e-cff66177ffc9', N'Walker Red Ale', N'A dark red Irish Red Ale.', CAST(10.28 AS Decimal(30, 2)))
GO
INSERT [dbo].[QUOTEDETAILS] ([QuoteDetailID], [QuoteID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'98171f74-26a4-41cb-8d12-157e6db142dc', N'1db78684-39bb-4f11-b089-6b837db5f23c', N'f87f175b-a70e-4cdf-848f-4d1a9b85453f', 5, CAST(10.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[QUOTEDETAILS] ([QuoteDetailID], [QuoteID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'6bb9ce76-2c41-4348-a8c4-5dae81ee93f0', N'b97bf095-81f9-4fce-bc84-b550fbc7057a', N'5e0101ec-b87c-4ed2-bd6c-3fee20ef8d15', 2, CAST(9.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[QUOTEDETAILS] ([QuoteDetailID], [QuoteID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'033fc9ce-f130-4209-a90f-720408466f7c', N'1db78684-39bb-4f11-b089-6b837db5f23c', N'33a52b72-1cdd-43ee-ad07-3fc2ea2ff690', 3, CAST(8.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[QUOTEDETAILS] ([QuoteDetailID], [QuoteID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'19916803-f1c5-48c8-ae34-b63bc775629a', N'95424c7e-31ac-4a02-a7e2-24ff19d619b3', N'98b1a493-af57-4de7-97fa-2d5c77a46463', 2, CAST(12.99 AS Decimal(30, 2)))
GO
INSERT [dbo].[QUOTEDETAILS] ([QuoteDetailID], [QuoteID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'c4e4ac05-b675-4bc8-b3a9-c201610241a3', N'b97bf095-81f9-4fce-bc84-b550fbc7057a', N'7e556faf-cc95-4437-972e-cff66177ffc9', 8, CAST(10.28 AS Decimal(30, 2)))
GO
INSERT [dbo].[QUOTEDETAILS] ([QuoteDetailID], [QuoteID], [ProductID], [ProductQuantity], [ProductPrice]) VALUES (N'ce03410f-7d69-436f-a15b-cc31a6074851', N'95424c7e-31ac-4a02-a7e2-24ff19d619b3', N'7e556faf-cc95-4437-972e-cff66177ffc9', 3, CAST(10.28 AS Decimal(30, 2)))
GO
INSERT [dbo].[QUOTES] ([QuoteID], [UserID], [CustomerID], [QuoteAmount], [QuoteDate], [Complete]) VALUES (N'95424c7e-31ac-4a02-a7e2-24ff19d619b3', N'c2773b3b-d8c7-47d6-95cd-36ce2424867b', N'7c1a28f6-9ac1-45ca-b59f-c6285549d776', CAST(81.92 AS Decimal(30, 2)), CAST(N'2021-12-08' AS Date), 0)
GO
INSERT [dbo].[QUOTES] ([QuoteID], [UserID], [CustomerID], [QuoteAmount], [QuoteDate], [Complete]) VALUES (N'1db78684-39bb-4f11-b089-6b837db5f23c', N'c2773b3b-d8c7-47d6-95cd-36ce2424867b', N'3f555dc3-df4e-44dd-a167-baa96dd12016', CAST(56.82 AS Decimal(30, 2)), CAST(N'2021-12-08' AS Date), 0)
GO
INSERT [dbo].[QUOTES] ([QuoteID], [UserID], [CustomerID], [QuoteAmount], [QuoteDate], [Complete]) VALUES (N'b97bf095-81f9-4fce-bc84-b550fbc7057a', N'c2773b3b-d8c7-47d6-95cd-36ce2424867b', N'de2c66f4-7636-4dbe-83cb-d9ef939ea1e5', CAST(102.22 AS Decimal(30, 2)), CAST(N'2021-12-08' AS Date), 0)
GO
INSERT [dbo].[USERS] ([UserID], [UserUID], [UserRole], [UserFirst], [UserLast], [UserCompany]) VALUES (N'c2773b3b-d8c7-47d6-95cd-36ce2424867b', NULL, N'Sales', N'Casey', N'Walker', N'Brews Biz System')
GO
ALTER TABLE [dbo].[CUSTOMERS] ADD  DEFAULT (newid()) FOR [CustomerID]
GO
ALTER TABLE [dbo].[ORDERDETAILS] ADD  DEFAULT (newid()) FOR [OrderDetailID]
GO
ALTER TABLE [dbo].[ORDERS] ADD  DEFAULT (newid()) FOR [OrderID]
GO
ALTER TABLE [dbo].[ORDERS] ADD  DEFAULT (getdate()) FOR [OrderDate]
GO
ALTER TABLE [dbo].[PRODUCTS] ADD  DEFAULT (newid()) FOR [ProductID]
GO
ALTER TABLE [dbo].[QUOTEDETAILS] ADD  DEFAULT (newid()) FOR [QuoteDetailID]
GO
ALTER TABLE [dbo].[QUOTES] ADD  DEFAULT (newid()) FOR [QuoteID]
GO
ALTER TABLE [dbo].[QUOTES] ADD  DEFAULT (getdate()) FOR [QuoteDate]
GO
ALTER TABLE [dbo].[USERS] ADD  DEFAULT (newid()) FOR [UserID]
GO
ALTER TABLE [dbo].[ORDERDETAILS]  WITH CHECK ADD  CONSTRAINT [FK_ProductID_OrderDetails] FOREIGN KEY([ProductID])
REFERENCES [dbo].[PRODUCTS] ([ProductID])
GO
ALTER TABLE [dbo].[ORDERDETAILS] CHECK CONSTRAINT [FK_ProductID_OrderDetails]
GO
ALTER TABLE [dbo].[ORDERDETAILS]  WITH CHECK ADD  CONSTRAINT [FK_QuoteID_OrderDetails] FOREIGN KEY([OrderID])
REFERENCES [dbo].[ORDERS] ([OrderID])
GO
ALTER TABLE [dbo].[ORDERDETAILS] CHECK CONSTRAINT [FK_QuoteID_OrderDetails]
GO
ALTER TABLE [dbo].[ORDERS]  WITH CHECK ADD  CONSTRAINT [FK_CustomerID_Orders] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[CUSTOMERS] ([CustomerID])
GO
ALTER TABLE [dbo].[ORDERS] CHECK CONSTRAINT [FK_CustomerID_Orders]
GO
ALTER TABLE [dbo].[ORDERS]  WITH CHECK ADD  CONSTRAINT [FK_UserID_Orders] FOREIGN KEY([UserID])
REFERENCES [dbo].[USERS] ([UserID])
GO
ALTER TABLE [dbo].[ORDERS] CHECK CONSTRAINT [FK_UserID_Orders]
GO
ALTER TABLE [dbo].[QUOTEDETAILS]  WITH CHECK ADD  CONSTRAINT [FK_ProductID_QuoteDetails] FOREIGN KEY([ProductID])
REFERENCES [dbo].[PRODUCTS] ([ProductID])
GO
ALTER TABLE [dbo].[QUOTEDETAILS] CHECK CONSTRAINT [FK_ProductID_QuoteDetails]
GO
ALTER TABLE [dbo].[QUOTEDETAILS]  WITH CHECK ADD  CONSTRAINT [FK_QuoteID_QuoteDetails] FOREIGN KEY([QuoteID])
REFERENCES [dbo].[QUOTES] ([QuoteID])
GO
ALTER TABLE [dbo].[QUOTEDETAILS] CHECK CONSTRAINT [FK_QuoteID_QuoteDetails]
GO
ALTER TABLE [dbo].[QUOTES]  WITH CHECK ADD  CONSTRAINT [FK_CustomerID_Quotes] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[CUSTOMERS] ([CustomerID])
GO
ALTER TABLE [dbo].[QUOTES] CHECK CONSTRAINT [FK_CustomerID_Quotes]
GO
ALTER TABLE [dbo].[QUOTES]  WITH CHECK ADD  CONSTRAINT [FK_UserID_Quotes] FOREIGN KEY([UserID])
REFERENCES [dbo].[USERS] ([UserID])
GO
ALTER TABLE [dbo].[QUOTES] CHECK CONSTRAINT [FK_UserID_Quotes]
GO
USE [master]
GO
ALTER DATABASE [BrewsBizSystem] SET  READ_WRITE 
GO
