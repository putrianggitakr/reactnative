import axios from "axios";
import React, {useEffect, useState} from "react";
import{
    Button,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const baseURL = "https://sanbers-news-api.herokuapp.com/api";

const client = axios.create({
    baseURL:baseURL,
});

export default function RestApi(){
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    
    const [buttonMode, setButtonMode] = useState("Simpan");

    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState({});

    const handleError = (err) => {
        console.warn("Error Status: ", err.message);
        console.warn("Error Message: ", err.response.data);
       // ToastAndroid.show(err.response.data.message, 3000);
    };

    const getNews = async () => {
        try{
            const res = await client.get(`/news`);
            console.log(res.data);
            const _news = res.data.results.news;
            console.log("res: ", _news);
            setNews(_news);
        } catch (error){
            handleError(error);
        }
    };
    
    const addNews = async (title, value) => {
        try{
            const res = await client.post(`/news`, { title, value});
            console.log("res: ", res);
            setTitle("");
            setValue("");
        } catch (error){
            handleError(error);
        }
    };

    const editNews = async (id, title, value) => {
        try{
            const res = await client.put(`/news/${id}`, { title, value});
            console.log("res: ", res);

            setTitle("");
            setValue("");

            getNews();

            setButtonMode("Simpan");
        } catch (error){
            handleError(error);
        }
    };
    
    const deleteNews = async (id) => {
        try{
            const res = await client.delete(`/news/${id}`);
            console.log("res: ", res);
            getNews();
        } catch (error){
            handleError(error);
        }
    };

    const submit = async () => {
        try{
            if(buttonMode == "Simpan"){
                await addNews(title,value);
            }else{
                console.log(selectedNews);
                await editNews(selectedNews._id, title, value);
            }
            getNews();
        } catch (error){
            handleError(err);
        }
    };

    const onSelectedItem = (item) => {
        console.log(item);
        setSelectedNews(item);
        setTitle(item.value);
        setValue(item.value);
        setButtonMode("update");
    };

    const onDelete = (item) => deleteNews(item._id);

    useEffect(() => {
        getNews();    
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Tampilan API (CRUD)</Text>
            </View>
            <FlatList
                data={news}
                keyExtractor={(item, index) => `${item._id}-${index}`}
                renderItem={({item}) => {
                    return (
                        <View style={styles.newsItem}>
                            <TouchableOpacity
                                onPress={() => onSelectedItem(item)}
                                style={styles.newsContent}>
                                <Text style={styles.newsTitle}>{item.title}</Text>
                                <Text style={styles.newsValue}>{item.value}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => onDelete(item)}>
                                    <Text style={styles.deleteIcon}>X</Text>
                                </TouchableOpacity>
                        </View>
                    );
                }}
            />
            <View style={styles.form}>
                <Text>Post Data</Text>
                <TextInput
                    placeholder="Masukan Judul Berita"
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    placeholder="Masukan Isi Berita"
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}
                />
                <Button title={buttonMode} onPress={submit}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        paddingHorizontal:20,
    },
    header:{
        alignItems: "center",
    },
    title:{
        padding: 20,
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    newsItem:{
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 5,
    },
    newsContent:{
        flex:1,
        padding: 10,
        borderRadius: 12,
        borderColor: "grey",
        borderWidth: 1,
    },
    newsTitle: {},
    newsValue: {},
    deleteIcon: {
        borderWidth: 1,
        fontSize: 20,
        padding: 5,
        borderRadius: 12,
        color: "red",
    },
    form: {
        paddingVertical: 20,
    },
    input:{
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 6,
        marginBottom: 10,
    },
    contentNews: {
        backgroundColor: "grey",
        paddingVertical: 10,
    }
});