import React, { PureComponent } from 'react';
import { Icon } from './elements';

class DinersClub extends PureComponent {
  render = (): React.ReactElement => {
    return (
      <Icon
        viewBox="0 0 270 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="270" height="198" fill="url(#pattern-diners-club)" />
        <defs>
          <pattern
            id="pattern-diners-club"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <use
              xlinkHref="#image-diners-club"
              transform="scale(0.0037037 0.00505051)"
            />
          </pattern>
          <image
            id="image-diners-club"
            width="270"
            height="198"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADGCAYAAAAjfW7IAAAgAElEQVR4Xu1dCbAWxbXuW2WsPDQIYYsPURZRZBORCAgCigiERVACxoigRjSPNfowUdArippIQNYEURGEiOACeiWSIMpmQEWFCxiUTUWjV/CxE8tYdd+cgf7pv//u6Z7p7n/mzn/+qlcvcnv9zplvTp8+50wRMfh1+uOq8o17DpADx/5jMAp2RQQQgXwiUKXSD0iLOlVIx/Oqk3G9mxRFmTtUp8eWby+fsmI7+eSbY1Hmwj6IACKQQATqVqtEPvn9z0JxgXbjKiNfLkfLIoFSxyUhApYQAEvkwJSrtThB2ajFA6/7xxHRr3mdauTahtVJy3pVSZXTTrW0fBwGEUAEXCFw4Oh35P3d+8mL2/eR0j3fCKeBY8zG+64M5IbAPwqtjNN/SOb1aEx6t61DKlc6xdX+cFxEABFwjMChY9+TV9btIQOXfkjIkW+zZlNZH3LiuPWF8qyRThDGDZ3rOd4ODo8IIAL5RmD+it1CAnl6cCtyU7u6OTyR8w9Pv/VJ+U1zNmStu1vDWmTh0DZoYeRbmjgfIpBHBMACGTBjPVm2vSx71if6qYmDP56Mu+J8ct91TfO4fJwKEUAE4kTggee2kOI3PsosQXRsyWIS3hGKpBGn+HBuRCA+BKaVfExGlGzOLIB3mGabIIxfY2Dzs8gzw1rHt3KcGRFABGJF4Mbpb5N5pZ+fXANzZMkQR9YRxXOEHhzfFX0asYoNJ0cE4kUAfB5njP1b5saFPbL4xFH8ytbycSX/zKxyzYgOpH3TGvGuGmdHBBCB2BFYu2UvuWzq6sw6intd4Iep+8TBWhsQ1LXp3k6xLxgXgAggAslA4MIHV2aCxajVcfyowvg2Sm5pQ3q2rp2MFeMqEAFEIHYEXn37C9LrqfVZvo6iUQs3lk9+fcfxfzz1FFI+/erYF4oLQAQQgWQhUDTsZUK++95f1KgrzyVFkBq/8qO9/j9AoNdro9sna8W4GkQAEYgdge4T1mYCwzqdX4MUsccUjNuIXT64AEQgkQjwQWFZxIG3KYmUGS4KEYgdAf52BYkjdpG4WcDm3QfIpl37ya69R/0UaviVlh3MnFNtzgo3cfC7ovYZpH6N08hFXpkFvM63iXD8YyFxxC8DJysAwb6xpSywzoKTiYMGrVGZjGpQnXRuUpN0aFYLAwrzLgB7EyJx2MMy9pHgmmzRu5+Tedu+cmJJ2N4gWCa/avHfZFDn+kgitsF1PB4Sh2OAXQ+/Z+8x8vSKXaT4nU9ziq+4ntvm+HCDN7RDPYwZsgmqw7GQOByC63JoIIwxCzdnJx2pJvTicprXOsMv71jVK+0Ivgf4yfwPMMenZUcJLS+3Y99RMu/LQ4Ts9f7P1Q8ryrlC1uq4SBxW4XQ/WCjC8Iii2znVyC9b1iYdm9cidWpUsrJASHZavbmMrNj6NZm85V9uLB1v7VO7XkCG9zrPyppxELsIIHHYxdPZaPCwFj+3mUxev0s5R77NfqfHJc8CKRnQAo8wSqnntwESR37xjjSbnxuwcGPwm917wMZdcg4Z1btRrI5GWOuYv2+XVsyOBIDXCRypr95+iTWrKeo6sN9xBJA4EqwJYGUMm/1esB8joUWjwQoZMuf93HqVJnjj8cUEPat9kTiswmlvMAjYav7ku3JHpPcQjWvfIPH1X0HBhi7eatUCAetjzZ3tY7Ws7Em6Yo6ExJFAufml6ReXSmMxwIcxa3DLCmW2q/YUWgweca65/VKMSA0NnJ0OSBx2cLQ2Cl8UNmtg72EpGdiqwjoKpeX2DdCbN6AlwW/7GAAYsSsSR0TgXHTLKQbLTuKFa382ql2FsjJkGAWSYwRgsZB2BNAMuyBxGAJoq3sQaaTxwfB9OBNXWQuNTyNGtnTLxThIHC5QDTlmEGmk2RSHm5ezJ79lLRIVySOk4hk0R+IwAM9GV99puPB94VBpJg26Yb/k/kNvInnYUKY8joHEkUew+alyir4yDQqBNFyRx6g29cljN18Uo2TTPzUSR0wyDjrjFxJpuCKPQsQwn6qMxJFPtE/MFWSeF7LC818KMxVN6d2dSbN6VUyHwf4CBJA4YlCL38z+QJishs49QqzetuCnS51pNxKHM2jFA/OA01b4xbyTeAX5fsKKCz/xERYxvfZIHHo4WWtVdMfS3CxXLyL04KM9nORegPk/+ZVtBIrwPDOstZV9gNI89NpHZEz3852FfMussigbwK8RRkEtuA8Sh31MpSPy36KgDV0oNiWM4rU7/SArmxYNqzQw7oy+TZwQSNGY5XauaR0Scx7VJ1FTIXHkSRy+4+8uz9o48dk8Oq0LU9o39edtyJrLFXGw+1g4tI1Vq8n3dzyywoqE8IrWCoyZQZA47OIpHU0YHWr5TRiUROaaOPyNO0jCs3lk+eyh7qnI9cmTygZOg8SRByn4odVjXsuZaWqvZtZqavpv52le+PaRb4U7ygtxnJjZ5qdDZZZaFLG5sO6irCMNfZA48iBFoW/Duyosn9TDyuw6V5j5JA7YlM2r5aCw/LAAYmxHWMTE7ZE47OAoHUX2xrQV6KVDGrC4fBOHbfIQ3kZFkJ1NQoswfWq6IHE4FqXwbWnJ2tAljbiIwyZ52LQ60NdhrvRIHOYYBo4gulK04dsIG54dh8VBgbFhXdn0ddj0wThWn8QOj8ThUDRCp6ilm5TuE9aGqiAeJ3EAxDZ8C9ZuWCxZfA5VJ/FDI3E4FJGoRJ6NM3aU0ntxEwfxSh+WP9TFCG3Z7VSUQV0E3UVZR0Xtg8ThUHKiY4qpwkY12WMnDg9nG0cEW9GkNgjcoeokfmgkDkci8h/wUS9nj+4dU8qnX200Y2BB44CRk0AcECD2WXEXoyCsKNaWEBY8rhjpIRKHEXzyzqIMT9O3nImpngji8OCKEwNeWjb8Lo7UJ/HDInE4EpHIkWd6TDFxDiaFOMDqMM0EthXTYeN2y5H6JH5YJA5HIrrwwZU5nz08OPlqoySwomHe0YdLktNdfmKIw1uw6QMb9bjGY4Uh6Lrak9sOiSM6doE9i4a8mP13wzO1aQBUkojD9IbFFIuMYAxl4kh1KsSwSBwOxCTyRZi+3cLGbfDbShRxeIszid60mW5vagU6UJ8KMSQShwMxicoDml5FmhxTYItJIw7T40qORRdRjmtGdHBShCjicipMNyQOB6ISXRmaKKiNN2zSiMP0dsVWPIeNcHgHKpT4IZE4HIhIlEZvQhw2zvRJIw5TP4fI+RxFlKaWYJQ509AHicOBFEXXpuWzro08k6xWaZgBE0cc3uJNMLF1s4IlBcNo0cm2SBzRcAvsJXobmjwkpo7RJPo4YE0mDlIbZGobFweqlNghkTgciMY2cdgwy5NocZgc35A4HChuiCGROEKApdsUiUMPKSQOPZyS2AqJw4FUkDj0QEXi0MMpia2QOBxIBYlDD1QkDj2cktgKicOBVJA49EBF4tDDKYmtkDgcSMU2cdi4ekyic9Qk3Budow4UN8SQSBwhwNJtKro+jfvqMYnEEfcVNcjTNIJVVyfS1g6Jw4FEbUeOiooChV120ojDdD02rqgBQ4wcDatJx9sjcUTDLbCXiDhMciJMKn/RhZo+qOyGRUl8YWE0jdg0Tfqj6zVNtgu777S0R+JwIEkn2bF3eF+6l3wXVmcLSSMO02pomB2rI3V3bZA4HGArymY1fXBNygbCFk3nt21xmDhGbVg8dD8m63CgOhVmSCQOR6LKeSMaVjg3Ta1PEnGYFjXCSueOlDbEsEgcIcAK01TkvDO5WYG5TYr0Jok4TPw9gIONpD8Yx5TAwuhD2toicTiSqMhBauqIM3nTJoY4LNT5RMeoI6UNMSwSRwiwwjQVXaGavuGifsUtST4OU2vDpn/D1AIMow9pa4vE4VCiIs+/qTMuqtWRCIvDgrVh6iTOiNvCWhyqTuKHRuJwKCLRWdz0jev7OsYsJ2TvoVArTwJxmF7Bmvp5WMBM40hCgZ/CxkgcDoUqqhVq4wGOcsNiY14KVZTjgukxDeaOMq9MvHhMMVN8JA4z/AJ7Cz887fWwobRhk7xiJQ4Ln30EoG0k+9n29zhUn0QPjcThWDwiZbdlJoe5loyTOGx83NlG2D0VtY3jomO1SfzwSByORSQ0ry29gX2L5qE3tfwdcRGHrYcUnaKOFTXk8EgcIQGL0lwUDGYrK1OXPOIgDlukYXINzcvLFu5R9CBNfZA48iBN4QeVLFkdsHwd8sg3cdgiDdifNWvDIuZ5UJtET4HEkSfxiMLFbRaRAfIYNvs9Mq/0c+GO8kYc3sNZemdH0qxeFSvIom/DCozWB0HisA6peEDZVaINxyE7o2/dLC4l5LvvsxaSD+KAOdbc2Z5UrnSKNVRtFewx/eSktQ2lZCAkjjwKUvgQ1KhMyh/qYnUV8JYeMud9smx7WWZcp8ThWRnz+jYnN3SuZ3UfNr6ZSxdkUhjZ6qZSMhgSRx4FKQvccuWwA+EOXbyVlO75xk09Do8wxrVvQEb1bmTVygCR+EeUcV6ELGc5RRGXrevvKHOntQ8SR54lKwvccvlGBMLatGu/NYsAHupVpWWkd9s61gmDisPaEcXLSTk4vquzdeZZfRIzHRJHDKIQ5pqgxz8jCWu3KN6ILgk5BtVJzJRIHDGIQppr4vk7Do65vKDfjjb9Gqb1T2JQjQozJRJHTKKSpcfbvKKNaWuRp42SvCebrJBxjCyAEB2ROEKAZbupLGmrEJXeJ42Jq6w4Q+HqtdAtN9u6yo+HxOEa4YDxgyI+C4k8kDRiVMKIUyNxRATOVrdCJw+rpGE5atWWjNM4DhJHAqQalMQFBXAWDm2TSoepLMo1kkiQNCLBFrUTEkdU5Cz3C3zzemf2z0a1I3VqVLI8a3zDhS1EFLjSFOITn2T0Zkbi0MMpL60Cs1y9N2rJwFakZ+vaeVmLq0lgj5dNXOtHs1r5oSPUCoxhB0HiCIuY4/aqFPmKfHTxPxkxb4OdmxNPDuBAnn7zxak8xjlWM+PhkTiMIXQzQGB9TUdJZW52cjzvhE+6M50Lg7tMETTrj8Rhhp/T3qooSsh4ndG3CWnftIbTdUQdHKynya9sI8Vrd1qzMoiXe1I6vJ21eh9R91bo/ZA4Eq4BvtP0yXcD64omjUCcEIYnJ8hyHXddMzyaJEBnkTgSIASdJejcQgCBjL70HGtZsDrrYtsAyU1Y+hGZt+0rexYGTOBZGWtuviSxllVYnNLQHomjAkkRfAU9Z76jvpHwfCADG/2E9P/pWc5vYWBNS9Z/Tkas/1Sr2noouE/U+7jvuqahumFj9wggcbjH2PoMvtBmv0PIkW/VY3sPX7dzqpGfNapJLqpX1fitDUQBtT1WbP2aTN7yL701qFeZ3cJhgaCwS8H2YgSQOCqwZoDzdMI/PlVbIPwevdiH5j/8Abm2YXX/L1VPO9UnFfZ34Oh35P3d+/1/2rHvKNm0/9/h5wmLLRJGWMRia4/EERv09iYGIc5auUta4dzeTG5Gits342ZX6R4ViSNF8oXbjFfW7SF/ef+LrELFidyiZ/VMbXMO6dPmrFSF0icSaweLQuJwAGoShgQSWb257LgvYuc++47LsJv0iGLgmZXJVRfUdFqrNOyysH00BJA4ouFWIXuBsD/w/Bb7Pf/Fuj0HyL++Pf7tFZt5I+A7gR/4T6jvpHn9qhU29mLvPo90vV+N6sf9QXH9PvnkE1KzZi1SqdJ/xbWErHmROBIhBlxE0hA4duzfZNGiRWT6xEfJsDvvIoMHD4pliUBcj8+cSebMmEqWLH+TNG3aJJZ18JMicSRCDLiIpCAAb/b58+eTJQsXkAP79vrLGvvIhLwTx7r1b5PFL75AXpo/NwMNEkdStMRbB32zwJJ69OwRu0maIGgSvxR4G+/YsZN8tG0b+XDrFnLw4MGsNbe9tB2pXLkyadnyIlK3bt3A/cBYvxzQn+z6cEtOu3wSx/Llr5O77xiZIS12MQVHHHPmzCXj7x5tpIhVqtcgF7f1itmcfTZp3LgJuazDZcYPOZBGh9atMkKCOV4oWapUMqONYGcjBEBmy5YtIwsXPEveW+sVN9b8gWyv6PYz0uWqrqTFRS1ydIceCVhLgw6dT+LYsmUreWbunCxLg66j4IgDwNiwYQM5fPgQKVmyWMjqFJyL23ckVaqeDEbavXOHtH39xk3J7UOHk27dukVyGr300mJy19DbslQvn0qiqfPYjLEMwedAjxAADOhArz59yeWXX0FOP/20DOkDEZR9Vebr3WtLX80hGdCzAb+4Pkd34KjSr1ePrDni0AmRbhYccbCaD2+MmwbdKHxb7Pjya+lDAuTz8ccfC9808DYBB1b//v1DEQiYhb++8XokjoRTE5z3h996c9bD3LlXHzJ8xEhtZyHoz7SpU8iKkiVZuxU9jLcNGZLVLg7igEWee2ZN5VrjEl0szlFQhIF9e+XsOYg42MYyJYC3z6Qp07SViScxIKDX3lxlfASKS5hpnHf8+PH+jQL9gYymPTGbtG3TOtJ2+fFExMEfreMijgE//3nWC7agLQ6QNpiRbZs1jkwctCOYcw8Xj81xJD0643FyzTV9tRQLyOOtt97yjlGHrfhNtCbFRkoERJYpHC+m//nPxsTOksefn3mWdOlyZdZ6kkIcvOVT8MQhMsPg33QtDlbKojMp/H3w0BFk7NixSgXFBslEgH9owJpc4jmubQRAsU5xkTWBxKHWiViOKjaJA8aSkUcYy0MNFbbIFwLTpk0jUx5+MGu619e9Y/W2i5IDEkc0qaaCOGDrMr9Jksy7aCIqrF4iObrwMdDjMhJHNP1KDXHA9nnHF/ybTRM3GsTYKwwCV3W+Iuv6HZyhq9/eYOWIwq8D5qrX4Fzy+KxZ6OMIIySvbaqIQ+Z0dfHGCokzNtdAQHQ9PvKee8nw4cM1ettrgj4ONZapIg6Z1QFvrQ2bt6rRwBaxIsBbG7AY274NnQ0icahRSh1xgKP0yraX5OxcdO3GNgJP+65du7RjQKAvzCXLgYC/HTlyNDOFSVYjxK3QHxsdqRbvyRay9HAaYQktVWtk20L7qGsRrVskt7gIvyIRB9Vbimmtn9Qyvq7W0avUEQdsulWzJjmxHdfcMIg8OmFCDibgjFvx+vJMNqTqDQcKXlJSQubOmunPwV4hB+U7wENwz7jx2vElQTkLMNagIbeTW275lfLsz6ZlsxjAv4+9556sCEmIk3h67jM5Y8IRYsLvHxaG/tMckL7X9osclAVCEeUzQXQo73/QUWrTNkHEwZInRDIfOnQoM12rVq2U5EtfKIePHPGT83x9lfQLiuMI0g+Q46+G3JYTn2KKC9s/lcRx1+jROUlC7NtLlDpNQRHdwoCyrFm9RhjuDsQBrP/UU0/mXCGKBKXyt/BjgXO3g5eHcdZZdcjnn+/JSveGPT0yaYpQQUCxlnh5QWzUJX0QZdfXsF42/oUPwqJ5IT/6UeWctUBf1d6CFFckM5PxTB6SIOIIStiU+WNUSZ6yfYqIo379+uT+4vuESXD8nkHej02eony5RMEqlcQhE1Tpzk99EEUJREHEwecMsEAD0Qz+Rf+MhQPCgnRuSPN+Y9lfhenR6zZ/KDQn+QdVpFCiiEr+GMYrHF0vVSQ2I1ikbPQtz4Y8y9YyadLEDDmZPOh8eLUpEUV5GGgf1VGFZujyCZIyCwlePM8tWEDWrl4tzNHSJQ6IS6KR0mBVtO/QwS8lsPrNN6SJoDIr0gQf6JtK4pARA2tNwBuZfeCDiAPGmzljWqQsXdEVsUxR2Ldu0EMoKgfAXlmK5oT9gWLDDxK9wFpp0KhxjiLTedkbDlC+hc8/L9U1um4T4hCRs8ovZar8sv4q4qD9eJx1jlagd3eMHJ6lS7rEAfOCLO4tvj/nSBRUx0N2TDfBL5XEAcLp0+XyHFz4Y4go2EgWMCbL6gWhq7JyeQtApGDsgwpHgr+veCNQrrzS8sqnKkxD1wwYFI+521dk1rRl16wiBHoNbhLmLyKOuIL3dImDb6dDHCBU3fF5vQF877jjTunRIyjz3DaWBU0cIMQwqcsiotHJr+HjE0RvcNahqxMqzyufaEzRkU1nbMCFXY/OGwuOGlBHJaozU0QcKsIyeWMG9dV9sPNNHDoPP5BHH6+eCF/JTJfUdDFF4ghR80BkyegQh6ofTyyqmx1QDpGDjF8Lr9g6lgxVHP5BVq0JHK7wU5XokymmKIYDiSO7LogOcQC+Moub+vh0ySGoXSqJQ+YcFTklw1gcKgKQAa3qJ7pRiCJcFXGEeevwzkrwicxZsEh53Rhl3dBH5NA1OfpEXUeYo0QSLQ6Z/wX+fd7iEqMrcxbTgiEOWTBREoiDPRbQ2qphFf+MM87IiVOJqtgwtyhDFf49bOUt3X2IHLoqp6zu2GHbVeSjCt2r6GVl04JLJXGI3l6yc3rcxAHHjuYNzsnodhirQPVAmBAHODy7X95ReJ1MCaTfz/tbCzKS3YTZNK9VeNG/p4E4YC98ICQSh0IDwlztxU0c/JshKcQBEItqffLQg99k3EOPGJvAUVMFdMkgTLu0EIfL2qmpszhkdTlkb66kEQcouI7DVedBMLE46PjwQP/Wi8RVfYrAhj9C5CC1SaQ6mKXFxyE6bqLFEaABorNykFIjceg9TkH5KnQEU/LQCdzTW61eKyDF004/PSeKNy0WB78PmwF1qbI4RPU4VJXLk0gcutduqsfDhsXBzwEE8sLzi3I+M0Dbmaydj4ilY7qyOuDm6BzvC2988mNaiIM/qshSHVR6JPp7qohDdK2pCniKmzhAKPwabBWvcUEcVIlkFeZNrQ7ZVbpKjmGV30bpwKj46hITf3QLS8rslXqYGB4dLFNDHKLqUTpvqiQQhyhmwka5vKiKDSb8Iw8/rIwCFTk0dTBXKaYo4c325znpkdbk8whR8dUljjC6yWPK39bZJt5UEIcoTVw3KzCMcFSBXLIHQtVPFDMR1uoA4lR9H0T3oabrVUWLwn6jJHqpiEOW9q8rU9X47JHW5INMSSYO9kXqom5rLMTBsyEVdJQ7e1FWYBgFSwJxyGql6jizAMvfjBrp+xz4M2xUxaby0Tl28LdYOnktqgcb/i67HTP9KBOfCCa6wdK1CETHKpUOAykOueVmrexYXjfDWA3sMSdMPx3ZQJtYiEOmFGGui9jKVuxmw76pk0Acojc33VOQ0NkUbR2TW9fiYP0uKqvDpedeVvogavi7qDCRKAtZlzhEx+MgspX5b0R6LzoG6vop2HlsETlPKHknjqDUX1hc0IMCfTeVlvql/tjKVtAvaih0UohDdqMAewOFuX7gIL/EHPz4L7DLLJOoFgfMQaMOg3wLfCamixDxoDgSeChG//a3WjU2gYQeHHd/VjyKjEj5o6OMDGSWIqzrf4YO9RP+oM3GDzZmSi/CnE2bNcuqFid6uGWJaqqXK19HRVQKUteqCGqXF+IAEEDZ+dJ3soWJ8jUO7N8vDEICofbp01c7+YoWd/3yyy/J8r//LacEGyh/9x49Se3atUmLi1r4Syz7qoxAfcmFC57NWQMIvXGTpuT8Ro3Ihc2bZ2ol0NqUYfoFlfSTYcWTBi1sDHhPn/hoTsg4WGRQ+o+SkKzgMHuVB/IYduddpEfPHpmHlH+gbTsv+f3KbnGgHcigy1VdScOG52Zl59KHVnR9zEe80lqgItxojdfatc8iLVtelDWHrGiSSF70oRdZHrCeqj+u5usXHJ9E1gwdE2TI15vlS06qaneYkkdeiENmooVdPIALH9CB0nzwoEb5YrmMyWWC9o8Rd4/WWirraAuzZ7afqIiwaHIguD94xZf5NPagMoeicWRvXbbAj2rzMMZ47xamRvXqqqZGf6cfCH9y1uPKSFbRRLRm6uVeDVe+orus3CI/Do+XyoKG/tDnbq8wNJWVSDeoJQKkPnjwoEx5S0qKfLFo/uUKPi742UoBUAkqL8RB376q8vuwWJcl+GF8nc8g0LcPlJqH31GvInVQnQn6lodCsvSjyLCPKP2owGDMN71akls2bya7d+4g//d1Gbm4bTtS5+yzAy0s6MeuI0gBoK3qEweAxcqVq8i6f7xFqNVHSxACgXfq1DFyDQ6Vcgb9nR5boVI4rI3+4AECUoWiQpAxTK3Bc89tEEhssihSOi7VGxleNDAOZAU/eMHBkUREUmA9rV/3D9Km7aU5Fgy7Z/7zG6wsoN17694iP65ZKzNXq59eEullGkUOeSGOKAvDPogAIpBcBJA4kisbXBkikFgEkDgSKxpcGCKQXASQOJIrG1wZIpBYBJA4EisaXBgikFwEkDiSKxtcGSKQWASQOBIrGlwYIpBcBJA4kisbXBkikFgEUk8cEIi19NWlfjSeyQ8CfNq1a+fky98m64qrLx+cRNcBeK9ZvYZcc01fo6VBkFS3bt0KDm8ZrkZgnuhMgyshsNE0yjcvxAEP3RdffCHdO+SFwE/UBnIqgiJOKTHIBoexf33j9X40IeSgRPnBl+dfmj/XT8A7dOhQ6CHoHlRr5QcOCquXjVW5cmXlQwshz7JfEN405JuGP4tSyGlIP83hCQ2W1+G1pa/6IeUQig+5I0E/Nn+GbQfrWLJkMdm8aVNWeDqEZLdoebGf2yJ7EcjwUX0jOEjPQQ/5einseiHEf87sp/zyCKpyCjT3KwwukFMDX7WHZMln580lo393j9GnLfJCHJBtCKHTNJ6e3TCN0Yd/W7t6dU4Ogip5ilarglBf9nuZNK+la7fu5K6ht0XR35w+IFBImIJQ3wP79mqPSZObZGuFgeh6eYxg/9OemJ0TSkzHEq1FlUEJeRl80iDNfQj6VopOCn1QcpY2YF5DWM8jk6ZI8aZ4sTkgMD7FheIoy+mAtjR5j7dGAR9en6C9qs6LTM+pjg8fPlwIAZ9Cr0qFp+HtItnTcHsWFyCaaVOn+HsC0oRQ95kzppG/LFwU2fLIC3FQtPh0ZVHtDFGlaxV5wPhsshFbt4AqMlgL5513Xo7g2K/aA0Lu5g4AAAq1SURBVOj3Ft+f1eawl6cy/NabfaKgRV/4dGpRohibPco/yKIUeragjCgJSlZvUpZRq3prwSbZeVR1N6A9X9JPtG86Jsx/5plnZmEJmcIsiYvwhqxlsBDZsXm8ZXUp+KJOohINMNaEP/whKytaRAhsgSR2EzrFjVgiUJE4jC2qAKcqCAT9eFxkZQ1AJmC9gkUD+Tt9r+1HIMdHZc0HEX1eiUO3QIoow1PF9uyDwAoL5gTTTFSwBfqwc6nqM7APt04/WklLpDx8Nqbqu69BbyHZ5xpV3wqliqdTR0NWe4KvOgYFow8ePCisV6r78Skwq/d89lnWGCq8+bFVxMmnw4v0S5ZJrUMelGR1KouLviejWj99qFW4QDsg1G3b/ulb9M0uvNDvCvjy1loQUfB/qzDEoWMqUmJiH1QADX6y86UO8HD+3PDuO4Q1NXX60bc0+FZE5jB7LOGJQ1QBSvahJlkKv46lBvvQqQxG54C3PXsk5N/qgDdYGiK/lC5xwBiHDx/O8tUE4c1bcCpTnz4E/APLW8BBJRhU5fjoi0H1cS0qZx5XHTLXffFRaxwyhuEoCmUJ4H8/PmtWGK7Iapto4gBm5yt9BSmFiDhUyOgSAD+Obj8QGk21Z8dQWRy8UsB/q4hDhJeKPHSJAx4ySO0Hf8vAvr0yW9FVcOigSxwimQXhzROn7mcERP4Y1kKg6wVCmTtrZo5fK8gq0CUOai3CWHBEY3861koYPVy2bJnv3Fc5alXPDPw90cQBD4qowIrMVEwScVDzUOYQUxGH7rkehEj3DQ8M9RGwwg865ukQB30rUtz5jxnrKLhL4mDXA0S5YfNWHd332/B7YS0JShxgwULdkX69euSQh4ykdImDEjKsmf8ukMqq0bU4tMEI0TDxxCGrsCTyGySJOEBx4CczB1XEwb8Ng5xsLHHAEUF0dJGRhw5x0Lci9ZnwCq5bINqFxWEyJsiH93WwFi1LHHDUFDmiZRadDnHwhMzLXMea07U4QnCCVtPEEwfsQkYevKkYF3HQYsIUcahIBf6LIN9BEHHw1b1VCsQTh+iBgH8THfN0iIN9K8I4vILrVt82echlD4hJQWbWWqOyY2XGE4do7/Bvos+M6hAHJS1KyKLPhqhuu5A4GJ6jYLBnetm1I3tzEBdxyCg6DHHQcnx8fIWoMC0/n4g4ZOTBH/NUxEEfHrZfFAV3dVQxJQ7+Ux0q4pCRB2/R6RAHHJPgxx6twlpzSBwK4oA/q0zFuIiDj0cAP8Pdd4z0a4TqHlVAYfmgI5WlQSGTEYfOMU9FHPStCEclWhkd5uU/NaBzXEmixRG0JpHFwWPOkjhLHirioIRFP+tBx4E6s1MefjAzrMqaQ+LQIA7RW4uaii+ULPWL6kJFcp2gGzpdVOBV/USxCKySiY4qoitYnb3IiAPmUx3zVMTBOw9l1pVKwfNlceisg90Db7EE+Tj4vYs+jUAtMxVxhPmsQtBxRaWHMnmZ/nuF8HHwmxRdowHbt+/QwWdrnYfNNXGAQh4+fCgr9kNFHLLjheqcG0QcMCbc0HS/vGPOjQAc8+BqNegTCfB3Gt7Ny4EPeVYFnLmwOESxFrq3PLAfnjhktyqyJEn+aAFjAnlAgBX4uWRX6PSYAlYp/+MtzyBrDolD0+KgzUSh6fRvSSAOFaPLnKOicHTVkUVFHLAW2TEPQullxME771RvXFVEpQvigDXxVpFu1CX05eUgiuMI0ifVd1VExEGPKTK8+Bdj0BUzEkdI4pC9neHfk0YcoFyLFi0ibHZl0K2KiBTDXMfKSEt0FIK2MuKgD6Qsb4J3LKpiKFwRB2816B5XeCcv/yAH+ThYjIPIQ0Qc1EoJstB4MpS1DUMcNNnNJGKU7rtCHlVYoYnOikkjDvoGYZVIFcchCnyTHVl0LA6KmeiYJyIO2k4Vvq2r4DC/K+IQWWk6wVMs4YiuVHWJA/YmOw7yxMGSVVAiG6/XMuskDHHAmFBmYOHzz6sMYuXfE0ccLLCqOH+6Oz5rU5c4+DeO6kjAoskKLKgf/TAzfNmLZXqeGHglEimibB46lq6JzpOHiDjoW1E1pq6CuyQO2VEsKPSct75Eb3Rq+anIk+qF6DjI67AuIYusudVvb8hJX9AlDj7YTMkMigZ5JQ7ekQQK+9jkKRkw4CGbNGliJj8lDAHcNOjGTC0P3X6iI4FOngMvVMCYfuOTppLDlSxkJNIcB9bBJVIw0RtStD5489x2++2ZOgpRv07OZtTyxMHOqyIOUWauyjJidVLl+IW2IrxF/US4gi6wxX5oAST6PWBZvRNo98sB/f2EPmgzZ8EirQ+b84TEEgcb2KfyB4mOlbyTVHakZa/NoSzEiteXZ54plTx1CSUvxKH6oC8NfhIV+gk6g/PnzD5eLgEIWkUcqvXI/CSyLFQdsGl9Crb+h6gf/xDL1grtZHjBuDoESK0Fdk72Dcauj8c0KHOUl5lLvPl90q+2i5LSeLx5EqZ/l2Eg0wt+XJbMKXEEyZH3OQTNT9eg+yF0fm06RK2jz3khDmDPI0eOStcDH/KFn6yN6sPIrKn4iPfV9KAqVtSsDVoPtBHVZeQ/iK0DMG0DH4KG365duwK78XulHzvmO0G7oD3ofngayOOQVz/j0QkT/CmAEEQ/Hg/Zumhfdh8q+ZvgLdun7KPU8CHoRo0uCKwfK8NAtk4RXrRKF615IcNApNtB89M1lH1VFkb9Mm11PvyuM3BeiENnIdgGEUAEKg4CSBwVR1a4UkQgMQggcSRGFLgQRKDiIBBIHOOuOJ/cd13TirMbXCkigAjkBYEHnttCit/4KDNXUac/ripf+dHx0v/dGtYir41un5eF4CSIACJQcRDoPmEtWbb9uIO20/k1SJH/v259odz//6eeQsqnX11xdoMrRQQQgbwgUDTsZUK++/74XE/0Kypa/MEX5X3/tC4zecktbUjP1se/tIY/RAARQAReffsL0uup9SeBAOKA/6oy8uXyA8f+4/+heZ1qZNO9nRAtRAARQAR8BC58cCUp3fON/7+rVPoBOTDl6uPE4f/occX7n2tGdCDtm9ZA2BABRKDAEeBvU4p7XUDG9W5ykjhYq4Oc/kNycHxXUrnSKQUOG24fEShcBA4d+56cMfZvXoj3t1nWBvxHxuIofmVr+biSf2ZQGtj8LPLMsNaFixruHBEocARunP42mVf6+UkUPN8G/Y+TRxXvX1o88Hr5xj0HMg2n9mpGhvfK/XBzgeOJ20cEUo8AH7fRok4VsvG+K8XEAWhkHVm8/8agsNTrCG4QEchCgCcN6hBlG2VZHJk/MI5S+DcIDFs4tA36PFDBEIEUIwA+jQEz1mcCvTJbZY4owqNKFiYceYDDdF6PxuSGzvVSDB1uDREoTATmr9hNBi79MOMIpSg8PbgVuald3RwDQ2xxeL0gMOymORsIje/IwHmCQHq3rYMWSGHqGO46JQiAhfHKuj1CwhAdT9RHFaYF7zBlO0Ow2LUNq5OW9aqSKqedmhI4cRuIQHoROHD0O/L+7v3kxe37MkFd/G55R6gIDanFwTfmnabphRZ3hggUJgIqKyOUxcFDWPd3fy3/5JtjhYks7hoRSCECdatVIiM7NyS/6dJQ25DQbsjjBQFjqz7eRyDuI8cPkkJwcUuIQFoQAMsCjiMr/7dj5Of//wHGO+80F3C9vwAAAABJRU5ErkJggg=="
          />
        </defs>
      </Icon>
    );
  };
}

export default DinersClub;
