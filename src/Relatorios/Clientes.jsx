import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


function ClientesPDF(clientes) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const Header = [
        {
            text: 'Clientes',
            fontSize: 25,
            bold:true,
            margin: [15, 20, 30, 90]
        }
    ];

    const dados = clientes.map((cliente) => {
        return[
            {text: cliente.nome,  fontSize: 9, margin:[0, 2, 0, 2]},
            {text: cliente.sobrenome, fontSize: 9, margin:[0, 2, 0, 2]},
            {text: cliente.aniversario, fontSize: 9, margin:[0, 2, 0, 2]},
        ]
    })

    const Body = [
        {
            table:{
                headerRows: 1,
                widths: ['*', '*', '*', '*'],
                body: [
                    [
                        {text: 'Nome', style: 'tableHeader', fontSize: 9},
                        {text: 'Sobrenome', style: 'tableHeader', fontSize: 9},
                        {text: 'Aniversario', style: 'tableHeader', fontSize: 9},
                    ],
                    ...dados
                ]
            },
            layout: 'headerLineOnly'
        }
    ];

    function Footer(currentPage, pageCount) {
        console.log(currentPage, pageCount);
        return [
            {
                text: currentPage + '/' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }

        ]
    }

    const docDefil = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40], //Left top Right Bottom 

        header: [Header],
        content: [Body],
        footer: Footer()
    }

    pdfMake.createPdf(docDefil).print();
}


export default ClientesPDF;
