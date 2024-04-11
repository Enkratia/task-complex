// **
type ToastTypesType = ["warning", "error", "info", "success", undefined];
type ToastTypeType = ToastTypesType[number];

// **
type AdminRoutesType = ["/dashboard"];
type ProtectedRoutesType = ["/account"];

// **
type ContentType = {
  id: number;
  content: string;
};

interface IObjKeys {
  [key: string]: string;
}

type ReviewType = {
  id: number;
  text: string;
};

// Complex types (examples)
// type CategoryNames = ["startup", "business", "economy", "technology"];

// type CategoryDescriptionIdType = {
//   id: number;
// };

// type CategoryDescriptionContentType = {
//   [key in CategoryNames[number]]: string;
// };

// type CategoryDescriptionType = CategoryDescriptionIdType & CategoryDescriptionContentType;

// type ModalPageNamesType = ["/auth/signin", "/auth/signup", "/auth/forgot"];
// type ModalPagesType = { [key in ModalPageNamesType[number]]: React.ReactNode };

// type userLinksName = "facebook" | "twitter" | "instagram" | "linkedin";

// interface UserLinksType extends IObjKeys {
//   [key: userLinksName]: string;
// }
