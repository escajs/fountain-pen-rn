import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, IMAGES, SIZES } from '../Constants';
const PenDetails = ({ navigation }) => {
    const penDatails = [
        {
            id: 0,
            property: 'Color',
            content: 'Crimson'
        },
        {
            id: 1,
            property: 'Material',
            content: 'Metal'
        },
        {
            id: 2,
            property: 'Nib Type',
            content: 'Bent - 0.5 MM'
        },
        {
            id: 3,
            property: 'Nib Material',
            content: 'Steel'
        },
        {
            id: 4,
            property: 'Height',
            content: '14.3 cm'
        },
        {
            id: 5,
            property: 'Weight',
            content: '40 G'
        },
        {
            id: 6,
            property: 'Ink',
            content: 'Yes'
        }
    ]
    const renderPenPropety = (property, content) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: '#11324D', fontSize: 24, fontFamily: 'GalanoGrotesqueAltSemiBold' }}>{property}</Text>
                <Text style={{ color: '#11324D', fontSize: 18, fontFamily: 'GalanoGrotesqueAltExtraLight' }}>{content}</Text>
            </View>
        )
    }
    const RenderDetails = () => {
        return (
            <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                {penDatails?.map(item => (
                    <View key={item.id}>
                        {renderPenPropety(item.property, item.content)}
                    </View>
                ))}
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                height: '40%',
            }}>
                <View style={{ position: 'absolute', zIndex: 1, top: SIZES.padding * 2, left: SIZES.padding, right: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{
                        width: '50%'
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={IMAGES.back_icon}
                                resizeMode={'contain'}
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: '50%',
                        flexDirection: 'row',
                        justifyContent: 'flex-end'
                    }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#6B6B6B',
                                width: '60%',
                                height: 37,
                                borderRadius: 50,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <View><Text style={{
                                fontFamily: 'GalanoGrotesqueAltBold',
                                color: 'white',
                                fontSize: 16,
                                marginLeft: 7
                            }}>Share</Text></View>
                            <View style={{
                                width: 37,
                                height: 37,
                                backgroundColor: '#333333',
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    source={IMAGES.share_icon}
                                    resizeMode={'cover'}
                                    style={{
                                        width: 26,
                                        height: 26
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Image style={{ width: '100%', height: '100%' }}
                    source={IMAGES.BannerImg}
                    resizeMode={'cover'}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
            <View style={{
                flex: 1,
                backgroundColor: COLORS.lightBleu,
                borderTopLeftRadius: 70,
                borderTopRightRadius: 70,
                marginTop: -70,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
            }}>
                <View style={{ marginHorizontal: SIZES.padding, marginTop: SIZES.padding }}>
                    <Text style={{ fontSize: 29, fontFamily: 'GalanoGrotesqueAltBold', color: '#6B7AA1' }}>Pen Specifications</Text>
                    <View style={{ height: '80%' }}>
                        <RenderDetails />
                        <View style={{
                            height: '30%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <TouchableOpacity style={{
                                width: 60,
                                height: 60,
                                backgroundColor: '#FDF5CA',
                                borderRadius: 50,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image
                                    source={IMAGES.shopping_cart}
                                    resizeMode={'cover'}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        transform: [{ translateX: -2 }]
                                    }}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>
            </View>
        </View>
    );
}

export default PenDetails;