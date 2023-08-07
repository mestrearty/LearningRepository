# Estudos Desenvolvimento Android

O desenvolvimento de aplicaçãoes Android são divididos em 2 grupos, a parte de interface gráfica o Layout em `xml` e a parte lógica em `Kotlin` ou `Java`.

## Android Layout
[Colinhas](./layouts.md)  
O Layout de fine a estrutura da interface gráfica e como os elementos se comportam e se relacionam. Todos esses elementos dentro do layout respeitam a hierarquia de `View` e `View Group`.

- `View`: Geralmente representam elementos na interface que o usuário possa interagir. (Button, EditText, Switch, ImageView,CheckBox)
- `View Group`: Elementos de layout que definem o comportamento de outros elementos. Um agrupador de elementos de interface. (LinearLayout,RelativeLayout, ContraintLayout, RecyclerView)

E forma resuminda as `Views` são sempre agrupadas dentro de `view groups`, e `um view group` pode estar dentro de outro `view group`. 

## Boas Práticas

### Níveis
Dentro do XML trabalhamos com níveis. Cada elemento dentro de outro simboliza um nível. Sendo assim, é possível que um código tenha em uma mesma view vários níves, mas atenção, mais significa mais processamento e custo. Por isso, verifique sempre a possibilidade de deixar seu código o mais plano (poucos níveis) possível.


```xml
<LinearLayout>
    <button/>
    <TextView/>

    <LinearLayout>
        <Button />
        <Button/>
    </LinearLayout>
</LinearLayout>
```

Errado:

```xml
<LinearLayout>

    <LinearLayout>
        <button/>
    </LinearLayout>

    <LinearLayout>
        <TextView/>
    </LinearLayout>

    <LinearLayout>
        <Button />
        <LinearLayout>
            <Button/>
        </LinearLayout>
    </LinearLayout>

</LinearLayout>
```

### Medidas Recomendadas
Dentro do ambiente Android lidamos com dezenas de milhares de dispositivos distintos, por isso, devemos nos atentar a algumas boas práticas para garantir a interoperabilidade e adaptação das aplicações.

Lembre-se, dispositivos diversos possuem número de pixels, resoluções e tamanhos distintos entre si.

* Não utilize pixel como medida, mas sim `sp` (Scale Independent Pixel), uma medida escalar independente de pixel.
* Ao em vez de usar `margins, paddings, etc` utilizamos de `dp` (Density Independent pixels) - Densidade Independednte de Pixel.
    ```javascript
    android:textSize= "12sp"
    android:layout_margin= "12dp"
    ```
* Utilize de largura e alturas que se adaptam ao cenário
  * match_parent - Quando um elemento possui este valor no atributo largura ou altura (width ou height), seu tamanho será igual ao tamanho do elemento pai/mãe (elemento exterior, nível acima)
  * wrap_content - Quando um elemento possui este valor no atributo largura ou altura (width ou height), seu tamanho será o suficiente para acomodar seu conteúdo.
    ```javascript
        android:layout_width="match_parent"
        adnroid.layout_height="wrap_content"
    ``` 
* Elemento são sempre escritos com "self closing tags"
    ```xml
    certo:<Button/>
    errado: <Button></Button>
    ```
* Elementos são case sensitive
    ```xml
    certo: <Button/>
    errado: <button/>
    ```

    [Fonte: @DevMasterTeam](https://github.com/DevMasterTeam/Udemy-Andorid-Kotlin/blob/master/Secao%2019%20-%20Layout%20Linear%20Elementos/(Slide)%20Conceitos%20e%20defini%C3%A7%C3%B5es%20de%20Layout.pdf)


## PX, SP e DP
#### px
Correspondente ao número de pixels da tela USO: evite utilizar px para tudo, apenas em casos bem específicos é recomendada.

#### sp
(Scale-independent Pixels) Idem ao dp, mas também considera o tamanho da fonte que o usuário está utilizando. É recomendado que use essa unidade quando especificar o tamanho de uma fonte, para que esta seja automaticamente ajustada conforme as preferências da tela do usuário. USO: Sempre utilize sp para fontes!

#### dip ou dp
(Density-independent Pixels) Essa unidade é relativa à resolução da tela. Por exemplo se a resolução da tela é de 160 dpi, significa que um dp representa 1 pixel em um total de 160. USO: aconselho ao invés de usar o px sempre use o dp.

Fonte: https://pt.stackoverflow.com/questions/295/qual-a-diferen%C3%A7a-entre-px-dp-dip-and-sp