import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { SIZES, COLORS, IMAGES } from '../Constants';
const Home = ({ navigation }) => {
    // Top Picks State
    const [topPicks, setTopPicks] = useState([
        {
            id: 0,
            img: IMAGES.first
        },
        {
            id: 1,
            img: IMAGES.second
        },
        {
            id: 2,
            img: IMAGES.third
        },
        {
            id: 3,
            img: IMAGES.fourth
        },
        {
            id: 4,
            img: IMAGES.fifth
        },
        {
            id: 5,
            img: IMAGES.sixth
        },
    ])

    // Pens' Parts Sections
    const partsSections = ['Nibs', 'Cartridges', 'Grips', 'Converters']
    const [pensNibs, setPensNibs] = useState([
        {
            id: 0,
            img: IMAGES.nib_first,
            type: 'Fine'
        },
        {
            id: 1,
            img: IMAGES.nib_second,
            type: 'Straight'
        },
        {
            id: 2,
            img: IMAGES.nib_third,
            type: 'Bent'
        }
    ])

    // Blog Feed
    const [blogs, setBlogs] = useState([
        {
            id: 0,
            img: IMAGES.blog_first,
            title: 'Fountain Pens Anatomy',
            readTime: 8
        },
        {
            id: 1,
            img: IMAGES.blog_second,
            title: 'Improve Handwritting',
            readTime: 12
        },
        {
            id: 2,
            img: IMAGES.blog_third,
            title: 'How To Repair Pens',
            readTime: 22
        }
    ])

    // renderPick
    const renderPick = (item) => {
        return (
            <View key={`pen-${item.id}`} style={{
                marginVertical: 10
            }}>
                <View>
                    <TouchableOpacity>
                        <Image
                            source={item.img}
                            resizeMode={'contain'}
                            style={{
                                width: 92,
                                height: 128.43
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: COLORS.crimson,
                        width: 24,
                        height: 24,
                        borderRadius: 50,
                        position: 'absolute',
                        right: 5,
                        top: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={IMAGES.heart}
                            resizeMode={"contain"}
                            style={{
                                width: 13.94,
                                height: 12.15
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    // added pens
    const [addedPens, setAddedPens] = useState([
        {
            id: 0,
            img: IMAGES.added_first
        },
        {
            id: 1,
            img: IMAGES.added_second
        },
        {
            id: 2,
            img: IMAGES.added_third
        }
    ])
    // render Added Pens Component
    const RenderAddedPens = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                    {addedPens?.map(item => (
                        <TouchableOpacity key={item.id} style={
                            item.id == 0 ? {} : { marginLeft: -13 }
                        }>
                            <Image
                                source={item.img}
                                resizeMode={'cover'}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderColor: COLORS.crimson,
                                    borderWidth: 2,
                                    borderRadius: 14
                                }}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 9, fontFamily: 'GalanoGrotesqueAltSemiBold' }}>+3 More</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            {/* Top Picks */}
            <View style={{
                flex: 1.4,
                backgroundColor: COLORS.lightOrange,
                paddingTop: SIZES.padding * 2
            }}>
                <View>
                    <Text style={{ marginLeft: SIZES.padding - 5, fontFamily: 'GalanoGrotesqueAltBold', fontSize: 22 }}>Top Picks</Text>
                </View>
                {/* Flat List */}
                <View style={{
                    backgroundColor: 'transparent',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 1
                    }}>
                        <View style={{
                            backgroundColor: 'transparent',
                            width: '100%',
                            height: '45%',
                            alignItems: 'center',
                            justifyContent: 'space-around'
                        }}>
                            <TouchableOpacity>
                                <Text style={{
                                    transform: [{ rotate: '-90deg' }],
                                    fontSize: 16,
                                    fontFamily: 'GalanoGrotesqueAltExtraLight'
                                }}>All</Text>
                                <View style={{
                                    width: 3,
                                    height: 12,
                                    backgroundColor: 'black',
                                    position: 'absolute',
                                    right: -3
                                }}>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    transform: [{ rotate: '-90deg' }],
                                    fontSize: 16,
                                    fontFamily: 'GalanoGrotesqueAltExtraLight',
                                    width: 70
                                }}>Marble</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    transform: [{ rotate: '-90deg' }],
                                    fontSize: 16,
                                    fontFamily: 'GalanoGrotesqueAltExtraLight',
                                    width: 70
                                }}>Metal</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{
                                    transform: [{ rotate: '-90deg' }],
                                    fontSize: 16,
                                    fontFamily: 'GalanoGrotesqueAltExtraLight',
                                    width: 70
                                }}>Wooden</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flex: 2.7
                    }}>
                        <FlatList
                            data={topPicks}
                            renderItem={({ item }) => renderPick(item)}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>
            </View>

            {/* Pens Info */}
            <View style={{
                flex: 2,
            }}>
                <View style={{
                    flex: 1,
                    marginHorizontal: SIZES.padding
                }}>
                    <TouchableOpacity style={{ height: '8%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <Image
                            source={IMAGES.burgemenu}
                        />
                    </TouchableOpacity>

                    {/* Explore Pens */}
                    <View style={{ height: '25%' }}>
                        <Text style={{ textAlign: 'left', fontFamily: 'GalanoGrotesqueAltSemiBold', fontSize: 16, paddingVertical: 5 }}>Explore Pens</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{
                                width: '48%',
                            }}>
                                <View style={{ height: '90%', justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{
                                        width: '100%',
                                        height: '48%',
                                    }}
                                        onPress={() => navigation.navigate('PenDetails')}
                                    >
                                        <Image
                                            source={IMAGES.explore_one}
                                            resizeMode={'contain'}
                                            style={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{
                                        width: '100%',
                                        height: '48%',
                                    }}>
                                        <Image
                                            source={IMAGES.explore_second}
                                            resizeMode={'contain'}
                                            style={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{
                                width: '48%',
                                height: '100%'
                            }}>
                                <View style={{ height: '90%', justifyContent: 'space-between' }}>
                                    <TouchableOpacity>
                                        <Image
                                            source={IMAGES.explore_third}
                                            resizeMode={'cover'}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 14
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* Pens Parts */}
                    <View style={{ height: '23%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'left', fontFamily: 'GalanoGrotesqueAltSemiBold', fontSize: 16, paddingVertical: 5 }}>Pens' Parts</Text>
                            <TouchableOpacity>
                                <Text style={{ textAlign: 'right', fontFamily: 'GalanoGrotesqueAltExtraLight', fontSize: 14, paddingVertical: 5, color: COLORS.lightGray }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Pens Parts Sections */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FlatList
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}
                                data={partsSections}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity style={{ marginLeft: 5 }}>
                                        <Text style={{ textAlign: 'left', fontFamily: 'GalanoGrotesqueAltSemiBold', fontSize: 12, paddingVertical: 5 }}>{item}</Text>
                                        <View style={index != 0 ? {} : {
                                            width: 14,
                                            height: 2,
                                            position: 'absolute',
                                            backgroundColor: '#000',
                                            bottom: 3
                                        }}></View>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item) => item}
                            />
                        </View>
                        {/* Pens Parts Slider */}
                        <View>
                            <FlatList
                                data={pensNibs}
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity style={{
                                        marginRight: 8
                                    }}>
                                        <Image
                                            source={item.img}
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={true}
                                            resizeMode={"cover"}
                                            style={{
                                                width: 70,
                                                height: '83%',
                                                borderRadius: 14
                                            }}
                                        />
                                        <View style={{
                                            backgroundColor: COLORS.crimson,
                                            width: "63%",
                                            height: 10,
                                            position: 'absolute',
                                            left: 0,
                                            top: 10,
                                            borderTopRightRadius: 14,
                                            borderBottomRightRadius: 14
                                        }}>
                                            <View style={{ position: 'relative', left: 3 }}>
                                                <Text style={{ color: 'white', fontFamily: 'GalanoGrotesqueAltSemiBold', fontSize: 11 }}>{item.type}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>

                    {/* Blogs Feed */}
                    <View style={{ height: '27%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'left', fontFamily: 'GalanoGrotesqueAltSemiBold', fontSize: 16, paddingVertical: 5 }}>Blogs Feed</Text>
                            <TouchableOpacity>
                                <Text style={{ textAlign: 'right', fontFamily: 'GalanoGrotesqueAltExtraLight', fontSize: 14, paddingVertical: 5, color: COLORS.lightGray }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={blogs}
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity style={{
                                        marginLeft: 7
                                    }}>
                                        <Image
                                            source={item.img}
                                            resizeMode={'cover'}
                                            style={{
                                                height: '100%',
                                                width: 100,
                                            }}
                                        />
                                        <View style={{ position: 'absolute', top: 5 }}>
                                            <Text style={{ fontFamily: 'GalanoGrotesqueAltBold', fontSize: 13 }}>{item.title.substring(0, item.title.indexOf(' '))}</Text>
                                            <Text style={{ fontFamily: 'GalanoGrotesqueAltBold', fontSize: 13 }}>{item.title.substring(item.title.indexOf(' '))}</Text>
                                            <Text style={{ fontFamily: 'GalanoGrotesqueAltExtraLight', fontSize: 12 }}>{item.readTime} min read</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>

                    {/* Added Pens */}
                    <View style={{ height: '4%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 52, height: 3, backgroundColor: '#000' }}></View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View>
                            <Text style={{ textAlign: 'left', fontFamily: 'GalanoGrotesqueAltSemiBold', fontSize: 16, paddingVertical: 5 }}>Added Pens</Text>
                            <Text style={{ textAlign: 'left', fontFamily: 'GalanoGrotesqueAltSemiBold', fontSize: 13, marginTop: -5 }}>6 total</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                width: '70%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%'
                            }}>
                                <RenderAddedPens />
                            </View>
                            <View style={{
                                width: '30%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%'
                            }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#000',
                                        borderRadius: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 30,
                                        width: 30
                                    }}
                                >
                                    <Image
                                        source={IMAGES.add_icon}
                                        resizeMode={'cover'}
                                        style={{
                                            width: 15,
                                            height: 15
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
}

export default Home;