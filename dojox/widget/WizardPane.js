//>>built
require({cache:{"url:dojox/widget/Wizard/Wizard.html":'<div class="dojoxWizard" dojoAttachPoint="wizardNode">\n    <div class="dojoxWizardContainer" dojoAttachPoint="containerNode"></div>\n    <div class="dojoxWizardButtons" dojoAttachPoint="wizardNav">\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="previousButton">${previousButtonLabel}</button>\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="nextButton">${nextButtonLabel}</button>\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="doneButton" style="display:none">${doneButtonLabel}</button>\n        <button dojoType="dijit.form.Button" type="button" dojoAttachPoint="cancelButton">${cancelButtonLabel}</button>\n    </div>\n</div>\n'}});
define("dojox/widget/WizardPane","dojo/_base/lang,dojo/_base/declare,dojo/_base/connect,dijit/layout/StackContainer,dijit/layout/ContentPane,dijit/form/Button,dijit/_TemplatedMixin,dijit/_WidgetsInTemplateMixin,dojo/i18n,dojo/text!./Wizard/Wizard.html,dojo/i18n!dijit/nls/common,dojo/i18n!./nls/Wizard,dojox/widget/WizardPane".split(","),function(a,d,f,g,e){return d("dojox.widget.WizardPane",e,{canGoBack:!0,passFunction:null,doneFunction:null,startup:function(){this.inherited(arguments);if(this.isFirstChild)this.canGoBack=
!1;if(a.isString(this.passFunction))this.passFunction=a.getObject(this.passFunction);if(a.isString(this.doneFunction)&&this.doneFunction)this.doneFunction=a.getObject(this.doneFunction)},_onShow:function(){if(this.isFirstChild)this.canGoBack=!1;this.inherited(arguments)},_checkPass:function(){var b=!0;if(this.passFunction&&a.isFunction(this.passFunction)){var c=this.passFunction();switch(typeof c){case "boolean":b=c;break;case "string":alert(c),b=!1}}return b},done:function(){this.doneFunction&&a.isFunction(this.doneFunction)&&
this.doneFunction()}})});