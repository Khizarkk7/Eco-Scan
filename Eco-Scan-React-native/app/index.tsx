import Button from "@/components/ui/Button";
import { router } from "expo-router";
import { Text, View, Image, SafeAreaView } from "react-native";

export default function home() {
  return (
    <SafeAreaView className="flex-1 bg-[#12360A]">

        <View className="flex-1 items-center justify-center py-10">
          
          <View className="items-center mb-16 py-6 relative ">
            <Image
              source={require("../assets/images/logo.png")}
              className="w-[250px] h-[80px] sm:w-[250px] sm:h-[100px] rounded-xl mb-4"
            />
            <Text className="text-white text-2xl px-6 font-bold text-center absolute bottom-0">
              Your Guide to Sustainable Choices
            </Text>
          </View>


          <Text className="text-[#ACEF6A] text-2xl sm:text-3xl font-bold mb-3 text-center">
            What is EcoScan?
          </Text>


          <Text className="text-white text-base sm:text-lg text-center leading-relaxed">
            EcoScan is your go-to guide for making eco-friendly choices. By scanning a product, 
            the app instantly provides insights into its carbon footprint, recyclability, and 
            ethical sourcing. It also assigns a sustainability rating on a scale and suggests 
            greener alternatives, empowering you to make environmentally conscious decisions with ease.
          </Text>
        </View>
        
        <Button  variant="custom" size="lg" className="mb-4 bg-[#83C233] border-0 w-32 h-10"  textStyle="text-xl text-white"  title={"Next"} onPress={()=>router.push("/about/about-us")}/>
    </SafeAreaView>
  );
}
