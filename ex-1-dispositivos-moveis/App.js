import { Text, View, Image } from 'react-native';


 function app(){
   let image = "https://img.freepik.com/fotos-gratis/mulher-feliz-e-relaxada-pega-um-momento-despreocupado-desfruta-da-liberdade-canta-musica-mantem-os-bracos-levantados-fecha-os-olhos-danca-ao-som-da-musica-favorita-usa-camiseta-amarela-casual-isolada-na-parede-branca_273609-53278.jpg"; 
   const nome = "Thalita Nery";
  return(
    <View>
      <Image
        source={{uri: image}}
        style={{ width: 150,
          height: 150,
          alignSelf: 'center'}}
      /> 

      <Text />
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 10
        }}>
          {nome}
      </Text>

      <Text />
      <Text 
        style={{
          fontSize: 19,
          fontStyle: 'bold',
          marginTop: 15

        }}>
        Dados pessoais:
      </ Text>

      <Text />
      <Text 
        style={{
          fontSize: 15,
          marginTop: 15

        }}>
        
      </ Text>
      <Text 
        style={{
          fontSize: 15,
          fontStyle: 'bold',
          marginTop: 15

        }}>
        Cursando Análise e desenvolvimento de sistemas (5º semestre). Experiência na area de back-end e front-end, bem como wordPress
      </ Text>

      <Text 
        style={{
          fontSize: 19,
          fontStyle: 'bold',
          marginTop: 15

        }}>
        Experiência profissional:
      </ Text>

      <Text 
        style={{
          fontSize: 15,
          marginTop: 15

        }}>
        Estagiária em engenharia de Software - Creditas (2022 - atualmente)
        Auxiliar de marketing - Método 3a Médico
      </ Text>

      <Text 
        style={{
          fontSize: 15,
          marginTop: 5

        }}>
        Auxiliar de marketing - Método 3a Médico (2022 - atualmente)
      </ Text>
    </View>
  )
  }

export default app;