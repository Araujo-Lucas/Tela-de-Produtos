function toggleMenu()
{
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// JS do modal do Botão de cadastrar produtos
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});


// JS do CRUD
var selectedRow = null

function onFormSubmit() 
{
    if (validate()) 
    {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() 
{
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["uni_medida"] = document.getElementById("uni_medida").value;
    formData["quantidade"] = document.getElementById("quantidade").value;
    formData["preco_custo"] = document.getElementById("preco_custo").value;
    formData["preco_cliente_final"] = document.getElementById("preco_cliente_final").value;
    formData["preco_cliente_terceirizado"] = document.getElementById("preco_cliente_terceirizado").value;
    formData["desconto_max"] = document.getElementById("desconto_max").value;
    return formData;
}

function insertNewRecord(data) 
{
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.uni_medida;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantidade;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.preco_custo;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.preco_cliente_final;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.preco_cliente_terceirizado;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.desconto_max;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)"><i class="fas fa-edit icone-editar"></i></a>
                       <a onClick="onDelete(this)"><i class="fas fa-trash icone-remover"></i></a>`
}

function resetForm() 
{
    document.getElementById("fullName").value = "";
    document.getElementById("uni_medida").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco_custo").value = "";
    document.getElementById("preco_cliente_final").value = "";
    document.getElementById("preco_cliente_terceirizado").value = "";
    document.getElementById("desconto_max").value = "";
    selectedRow = null;
}

function onEdit(td) 
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("uni_medida").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantidade").value = selectedRow.cells[2].innerHTML;
    document.getElementById("preco_custo").value = selectedRow.cells[3].innerHTML;
    document.getElementById("preco_cliente_final").value = selectedRow.cells[4].innerHTML;
    document.getElementById("preco_cliente_terceirizado").value = selectedRow.cells[5].innerHTML;
    document.getElementById("desconto_max").value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formData) 
{
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.uni_medida;
    selectedRow.cells[2].innerHTML = formData.quantidade;
    selectedRow.cells[3].innerHTML = formData.preco_custo;
    selectedRow.cells[4].innerHTML = formData.preco_cliente_final;
    selectedRow.cells[5].innerHTML = formData.preco_cliente_terceirizado;
    selectedRow.cells[6].innerHTML = formData.desconto_max;
}

function onDelete(td) 
{
    if (confirm('Tem certeza que deseja deletar esse produto?')) 
    {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() 
{
    isValid = true;
    if (document.getElementById("fullName").value == "" || document.getElementById("uni_medida").value == "" || document.getElementById("quantidade").value == "" || document.getElementById("preco_custo").value == "" || document.getElementById("preco_cliente_final").value == "" || document.getElementById("preco_cliente_terceirizado").value == "")
    {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
        document.getElementById("uni_medidaValidationError").classList.remove("hide");
        document.getElementById("quantidadeValidationError").classList.remove("hide");
        document.getElementById("preco_custoValidationError").classList.remove("hide");
        document.getElementById("preco_cliente_finalValidationError").classList.remove("hide");
        document.getElementById("preco_cliente_terceirizadoValidationError").classList.remove("hide");
        document.getElementById("desconto_maxValidationError").classList.remove("hide");
    } 
    else 
    {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide") || !document.getElementById("uni_medidaValidationError").classList.contains("hide"))
        {
            document.getElementById("fullNameValidationError").classList.add("hide");
            document.getElementById("uni_medidaValidationError").classList.add("hide");
            document.getElementById("quantidadeValidationError").classList.add("hide");
            document.getElementById("preco_custoValidationError").classList.add("hide");
            document.getElementById("preco_cliente_finalValidationError").classList.add("hide");
            document.getElementById("preco_cliente_terceirizadoValidationError").classList.add("hide");
            document.getElementById("desconto_maxValidationError").classList.add("hide");
        }      
    }
    return isValid;
}

