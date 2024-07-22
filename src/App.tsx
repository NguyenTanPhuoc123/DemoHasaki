import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {GREEN_COLOR, GREY_COLOR, WHITE_COLOR} from './constants/color';
import styles, { WITDH } from './style';
import {
  LOGO,
  SLIDE1,
  SLIDE10,
  SLIDE11,
  SLIDE2,
  SLIDE3,
  SLIDE4,
  SLIDE5,
  SLIDE6,
  SLIDE7,
  SLIDE8,
  SLIDE9,
} from './constants/image';
import Carousel from 'react-native-reanimated-carousel';
import FlashSaleItem from './components/FlashSaleItem';
import CategoryItem from './components/CategoryItem';
import BrandItem from './components/BrandItem';
import SellingItem from './components/SellingItem';

const slide = [
  {id: 1, image: SLIDE1},
  {id: 2, image: SLIDE2},
  {id: 3, image: SLIDE3},
  {id: 4, image: SLIDE4},
  {id: 5, image: SLIDE5},
  {id: 6, image: SLIDE6},
  {id: 7, image: SLIDE7},
  {id: 8, image: SLIDE8},
  {id: 9, image: SLIDE9},
  {id: 10, image: SLIDE10},
  {id: 11, image: SLIDE11},
];

const options = [
  {
    id: 1,
    image: 'https://media.hcdn.vn/hsk/icon/hasaki-number-1.png',
    title: 'Danh mục',
  },
  {
    id: 2,
    image: 'https://media.hcdn.vn/hsk/icon/hasaki-number-1.png',
    title: 'Hàng mới về',
  },
  {
    id: 3,
    image: 'https://media.hcdn.vn/hsk/icon/hasaki-nowfree.png',
    title: 'Giao 2H',
  },
  {
    id: 4,
    image: 'https://media.hcdn.vn/hsk/icon/hasaki-clinic.png',
    title: 'Clinic & S.P.A',
  },
  {
    id: 5,
    image: 'https://media.hcdn.vn/hsk/icon/hsk-icon-clinic-deal.png',
    title: 'Clinic Deals',
  },
  {
    id: 6,
    image: 'https://media.hcdn.vn/hsk/icon/hasaki-number-1.png',
    title: 'Tra cứu đơn hàng',
  },
  {
    id: 7,
    image: 'https://media.hcdn.vn/hsk/icon/hasaki-number-1.png',
    title: 'Bán chạy',
  },
  {
    id: 8,
    image: 'https://media.hcdn.vn/hsk/icon/hsk-icon-khai-truong-cn200.png',
    title: 'Khai trương CN 200',
  },
  {
    id: 9,
    image: 'https://media.hcdn.vn/hsk/icon/hasaki-dat-hen.png',
    title: 'Đặt hẹn',
  },
  {
    id: 10,
    image: 'https://media.hcdn.vn/hsk/icon/hasaki-cam-nang.png',
    title: 'Cẩm nang',
  },
];

const flashSales = [
  {
    id: 1,
    image:
      'https://media.hcdn.vn/catalog/product/p/r/promotions-auto-sua-rua-mat-cerave-sach-sau-cho-da-thuong-den-da-dau-473ml_rxgT1shKhXRXgSHp_img_220x220_0dff4c_fit_center.png',
    title: 'Sữa Rửa Mặt Cerave Sạch Sâu Cho Da Thường Đến Da Dầu',
    priceSale: 340000,
    price: 455000,
    discount: 25,
  },
  {
    id: 2,
    image:
      'https://media.hcdn.vn/catalog/product/p/r/promotions-auto-sua-rua-mat-cerave-sach-sau-cho-da-thuong-den-da-dau-473ml_rxgT1shKhXRXgSHp_img_220x220_0dff4c_fit_center.png',
    title: 'Sữa Rửa Mặt Cerave Sạch Sâu Cho Da Thường Đến Da Dầu',
    priceSale: 340000,
    price: 455000,
    discount: 25,
  },
  {
    id: 3,
    image:
      'https://media.hcdn.vn/catalog/product/p/r/promotions-auto-sua-rua-mat-cerave-sach-sau-cho-da-thuong-den-da-dau-473ml_rxgT1shKhXRXgSHp_img_220x220_0dff4c_fit_center.png',
    title: 'Sữa Rửa Mặt Cerave Sạch Sâu Cho Da Thường Đến Da Dầu',
    priceSale: 340000,
    price: 455000,
    discount: 25,
  },
];

const categories = [
  {
    id: 1,
    title: 'Trang Điểm Môi',
    image:
      'https://media.hcdn.vn/catalog/category/c24-trang-diem-moi_img_120x120_17b03c_fit_center.jpg',
  },
  {
    id: 2,
    title: 'Trang Điểm Mặt',
    image:
      'https://media.hcdn.vn/catalog/category/c52-trang-diem-mat_img_120x120_17b03c_fit_center.jpg',
  },
  {
    id: 3,
    title: 'Dầu Gội Và Dầu Xả',
    image:
      'https://media.hcdn.vn/catalog/category/2144_img_120x120_17b03c_fit_center.jpg',
  },
  {
    id: 4,
    title: 'Chống Nắng Da Mặt',
    image:
      'https://media.hcdn.vn/catalog/category/11_1_img_120x120_17b03c_fit_center.jpg',
  },
  {
    id: 5,
    title: 'Tẩy Trang Mặt',
    image:
      'https://media.hcdn.vn/catalog/category/48_1_img_120x120_17b03c_fit_center.jpg',
  },
  {
    id: 6,
    title: 'Mặt Nạ',
    image:
      'https://media.hcdn.vn/catalog/category/30_1_img_120x120_17b03c_fit_center.jpg',
  },
  {
    id: 7,
    title: 'Sữa Rửa Mặt',
    image:
      'https://media.hcdn.vn/catalog/category/19_3_img_120x120_17b03c_fit_center.jpg',
  },
  {
    id: 8,
    title: 'Trang Điểm Mắt',
    image:
      'https://media.hcdn.vn/catalog/category/c50-trang-diem-mat_img_120x120_17b03c_fit_center.jpg',
  },
  {
    id: 9,
    title: 'Sữa Tắm',
    image:
      'https://media.hcdn.vn/catalog/category/26_1_img_120x120_17b03c_fit_center.jpg',
  },
  {
    id: 10,
    title: 'Dưỡng Thể',
    image:
      'https://media.hcdn.vn/catalog/category/c1897-duong-the_img_120x120_17b03c_fit_center.jpg',
  },
];

const brands = [
  {
    id: 1,
    image:
      'https://media.hcdn.vn//hsk/brandLorealimage-cover500-x-500130520241715594649_img_190x190_30c310_fit_center.jpg',
    imageBrand: 'https://media.hcdn.vn/brand/1625111472loreal.jpg',
  },
  {
    id: 2,
    image:
      'https://media.hcdn.vn//hsk/brandLa-roche-posay-image-cover-500-x-5001718952735_img_190x190_30c310_fit_center.jpg',
    imageBrand:
      'https://media.hcdn.vn//hsk/brandLa-roche-posay-logo1690281599.jpg',
  },
  {
    id: 3,
    image:
      'https://media.hcdn.vn//hsk/brandcocoon-image-cover-500x5001712401401_img_190x190_30c310_fit_center.jpg',
    imageBrand: 'https://media.hcdn.vn/brand/1593168007the-coc.jpg',
  },
  {
    id: 4,
    image:
      'https://media.hcdn.vn//hsk/brandNarisCosmeticsimage-cover500x5001715596352_img_190x190_30c310_fit_center.jpg',
    imageBrand:
      'https://media.hcdn.vn//hsk/brandnaris-cosmetics-logo1716963318.jpg',
  },
];

const sellings = [
  {
    id: 1,
    name: 'Chống Nắng Da Mặt',
    count: '10.164M đã bán',
    image:
      'https://media.hcdn.vn/catalog/category/11_1_img_250x250_8e0796_fit_center.jpg',
  },
  {
    id: 2,
    name: 'Tẩy Trang Mặt',
    count: '9.961M đã bán',
    image:
      'https://media.hcdn.vn/catalog/category/48_1_img_250x250_8e0796_fit_center.jpg',
  },
  {
    id: 3,
    name: 'Sửa Rửa Mặt',
    count: '10.164M đã bán',
    image:
      'https://media.hcdn.vn/catalog/category/19_3_img_250x250_8e0796_fit_center.jpg',
  },
  {
    id: 4,
    name: 'Kem/Gel/Dầu Dưỡng',
    count: '10.164M đã bán',
    image:
      'https://media.hcdn.vn/catalog/category/9_1_img_250x250_8e0796_fit_center.jpg',
  },
];

const App = () => {
  const renderComponentHeader = () => {
    return (
      <View style={styles.leftComponent}>
        <Image source={LOGO} resizeMode="cover" style={styles.logo} />
        <View style={styles.containerSearch}>
          <Icon
            style={styles.iconSearch}
            name="search"
            size={12}
            color={GREEN_COLOR}
          />
          <TextInput
            style={styles.search}
            placeholder="Tìm kiếm"
            editable={false}
            focusable={false}
          />
        </View>
        <TouchableOpacity style={styles.iconBtnHeader}>
          <Icon name="qrcode" size={22} color={WHITE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtnHeader}>
          <Icon name="map-marker-alt" size={22} color={WHITE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtnHeader}>
          <Icon name="box" size={22} color={WHITE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtnHeader}>
          <Icon name="shopping-cart" size={22} color={WHITE_COLOR} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <Header
        backgroundColor={GREEN_COLOR}
        style={styles.headerContainer}
        centerComponent={renderComponentHeader()}
      />
    );
  };

  const renderSlide = ()=>(
    <Carousel
    data={slide}
    width={WITDH}
    renderItem={({item})=>(
      <Image key={item.id} source={item.image} />
    )}
    />
  )

  const renderOptions = () => {
    return (
      <View style={styles.optionsContainer}>
        <Image
          source={SLIDE1}
          style={{width: '96%', height: 140, margin: 5, borderRadius: 15}}
          resizeMode="cover"
        />
        <FlatList
          scrollEnabled={false}
          numColumns={5}
          data={options}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.optionItemContainer}>
                <Image
                  source={{uri: item.image}}
                  resizeMode="cover"
                  style={{width: 40, height: 40}}
                />
                <Text
                  style={{
                    color: WHITE_COLOR,
                    fontSize: 10,
                    textAlign: 'center',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  const renderFlashSale = () => {
    return (
      <View style={styles.flashSaleContainer}>
        <View style={styles.headFlashSale}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: WHITE_COLOR,
              margin: 10,
            }}>
            Flash deals
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 14, color: WHITE_COLOR, margin: 10}}>
              Xem tất cả
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={flashSales}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <FlashSaleItem key={item.id} {...item} />}
        />
      </View>
    );
  };

  const renderCategory = () => (
    <View style={styles.category}>
      <View style={styles.headFlashSale}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: GREEN_COLOR,
            margin: 10,
          }}>
          Danh mục
        </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 14, color: '#B4B4AB', margin: 10}}>
            Xem tất cả
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CategoryItem key={item.id} {...item} />}
      />
    </View>
  );

  const renderBranch = () => (
    <View style={styles.brand}>
      <View style={styles.headFlashSale}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: GREEN_COLOR,
            margin: 10,
          }}>
          Thương hiệu
        </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 14, color: '#B4B4AB', margin: 10}}>
            Xem tất cả
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={brands}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <BrandItem key={item.id} {...item} />}
      />
    </View>
  );
  const renderSelling = () => (
    <View style={styles.selling}>
      <View style={styles.headFlashSale}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: GREEN_COLOR,
            margin: 10,
          }}>
          Bán chạy
        </Text>
      </View>
      <FlatList
        data={sellings}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <SellingItem key={item.id} {...item} />}
      />
    </View>
  );
  const renderBtnChat = () => (
    <TouchableOpacity style={styles.btnChat}>
      <Icon name='comment-alt' size={25} color={WHITE_COLOR} />
    </TouchableOpacity>
  );
  return (
    <>
      {renderHeader()}
      <View style={{flex: 1, backgroundColor: GREY_COLOR}}>
        <ScrollView>
          {renderOptions()}
          {renderFlashSale()}
          {renderCategory()}
          {renderBranch()}
          {renderSelling()}
        </ScrollView>
        {renderBtnChat()}
      </View>
    </>
  );
};

export default App;
