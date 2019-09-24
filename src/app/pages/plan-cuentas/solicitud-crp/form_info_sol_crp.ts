export let FORM_INFO_SOL_CRP = {

    tipo_formulario: 'mini',
    alertas: true,
    modelo: 'SolicitudCRP',
    campos: [
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'NumeroCDP',
            label_i18n: 'Número de CDP',
            placeholder_i18n: 'Número de CDP',
            requerido: true,
            tipo: 'NumeroCDP',
            key: 'Valor',
            opciones: [
                { Valor: 120 },
                { Valor: 121 },
                { Valor: 122 }
            ],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'TipoCompromiso',
            label_i18n: 'Tipo de Compromiso',
            placeholder_i18n: 'Tipo de Compromiso',
            requerido: true,
            tipo: 'TipoCompromiso',
            key: 'Tipo',
            opciones: [
                { Tipo: 'Resolución'},
                { Tipo: 'Oficio' },
                { Tipo: 'Acta' }
            ],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'NumeroCompromiso',
            label_i18n: 'Número de Compromiso',
            placeholder_i18n: 'Número de Compromiso',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'TipoDocumento',
            label_i18n: 'Tipo de Documento',
            placeholder_i18n: 'Tipo de Documento',
            requerido: true,
            tipo: 'TipoDocumento',
            key: 'Tipo',
            opciones: [
                { Tipo: 'Cédula de Ciudadanía'},
                { Tipo: 'Tarjeta de Identidad' },
                { Tipo: 'Cédula de Extranjería' }
            ],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'NumeroDocumento',
            label_i18n: 'Número de Documento',
            placeholder_i18n: 'Número de Documento',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'NombreBeneficiario',
            label_i18n: 'Nombre de Beneficiario',
            placeholder_i18n: 'Nombre de Beneficiario',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'checkbox',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'montoTotal',
            label_i18n: 'Monto Total',
            placeholder_i18n: 'Monto Total',
            requerido: true,
            tipo: 'checkbox',
        },
        {
            etiqueta: 'checkbox',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'montoParcial',
            label_i18n: 'Monto Parcial',
            placeholder_i18n: 'Monto Parcial',
            requerido: true,
            tipo: 'checkbox',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'ValorParcial',
            label_i18n: 'Valor Parcial',
            placeholder_i18n: 'Valor Parcial',
            requerido: false,
            deshabilitar: true,
            tipo: 'number',
        }],
};
