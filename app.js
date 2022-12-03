function createFieldset(groupName, groupNameAbb){
    return console.log(`
    <fieldset class="form__fieldset">
        <legend>${groupName}</legend>
        <div class="form__element"><label for="${groupNameAbb}-forca" class="element__label">Força:</label><input type="number" name="${groupNameAbb}-forca" id="${groupNameAbb}-forca" class="element__input"></div>
        <div class="form__element"><label for="${groupNameAbb}-destreza" class="element__label">Destreza:</label><input type="number" name="${groupNameAbb}-destreza" id="${groupNameAbb}-destreza" class="element__input"></div>
        <div class="form__element"><label for="${groupNameAbb}-acerto" class="element__label">Acerto:</label><input type="number" name="${groupNameAbb}-acerto" id="${groupNameAbb}-acerto" class="element__input"></div>
        <div class="form__element"><label for="${groupNameAbb}-reflexo" class="element__label">Reflexo:</label><input type="number" name="${groupNameAbb}-reflexo" id="${groupNameAbb}-reflexo" class="element__input"></div>
        <div class="form__element"><label for="${groupNameAbb}-constituicao" class="element__label">Constituição:</label><input type="number" name="${groupNameAbb}-constituicao" id="${groupNameAbb}-constituicao" class="element__input"></div>
    </fieldset>
    `)
}