import ModalPopup from "@/components/ModalPopup.vue";
import IconButton from "@/components/IconButton.vue";

describe("<ModalPopup />", () => {
    it("renders with default props", () => {
        var show = false;
        cy.mount(() => (
            <ModalPopup show={show}>
                {{
                    activator: ({ props }) => (<IconButton {...props} activator></IconButton>),
                    default: () => (<>Content</>)
                }}
            </ModalPopup>
        ));

        cy.getById("modal-activator")
        .should("be.visible");
        
        cy.getById("modal-mask")
        .should("not.be.visible");
    });

    it("activator functions properly", () => {
        var show = false;
        cy.mount(() => (
            <ModalPopup show={show}>
                {{
                    activator: ({ props }) => (<IconButton {...props} activator></IconButton>),
                    default: () => (<>Content</>)
                }}
            </ModalPopup>
        ));
        
        // modal mask not visible by default
        cy.getById("modal-mask")
        .should("not.be.visible");
        
        // click the activator to open modal popup
        cy.getById("modal-activator")
        .find("button.v-btn")
        .click();
        
        // modal mask renders content correctly
        cy.getById("modal-mask")
        .should("be.visible")
        .find("[data-cy=modal-content]")
        .should("have.text", "Content");
    });

    it("'submit' button functions correctly", () => {
        var show = false;
        const onSubmitSpy = cy.spy().as("onSubmitSpy");
        cy.mount(() => (
            <ModalPopup show={show} onSubmit={onSubmitSpy}>
                {{
                    activator: ({ props }) => (<IconButton {...props} activator></IconButton>),
                    default: () => (<>Content</>)
                }}
            </ModalPopup>
        ));
        
        // click the activator to open modal popup
        cy.getById("modal-activator")
        .find("button.v-btn")
        .click();
        
        // click 'submit' button
        cy.getById("modal-submit-btn")
        .click();

        // correct event emitted
        cy.get("@onSubmitSpy")
        .should("have.been.called");

        // modal mask no longer visible after 'submit'
        cy.getById("modal-mask")
        .should("not.be.visible");
    });

    it("'close' button functions correctly", () => {
        var show = false;
        const onCloseSpy = cy.spy().as("onCloseSpy");
        cy.mount(() => (
            <ModalPopup show={show} onClose={onCloseSpy}>
                {{
                    activator: ({ props }) => (<IconButton {...props} activator></IconButton>),
                    default: () => (<>Content</>)
                }}
            </ModalPopup>
        ));
        
        // click the activator to open modal popup
        cy.getById("modal-activator")
        .find("button.v-btn")
        .click();
        
        // click 'close' button
        cy.getById("modal-close-btn")
        .click();

        // correct event emitted
        cy.get("@onCloseSpy")
        .should("have.been.called");

        // modal mask no longer visible after 'close'
        cy.getById("modal-mask")
        .should("not.be.visible");
    });
});