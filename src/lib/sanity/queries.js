
            export const queries = {
              // Add queries for each schema type
            
              getPages: `*[_type == "page"]`,
              getPageById: (id) => `*[_type == "page" && _id == "${id}"][0]`,
                
              getBlogposts: `*[_type == "blogPost"]`,
              getBlogpostById: (id) => `*[_type == "blogPost" && _id == "${id}"][0]`,
                
              getTags: `*[_type == "tag"]`,
              getTagById: (id) => `*[_type == "tag" && _id == "${id}"][0]`,
                
              getSeos: `*[_type == "seo"]`,
              getSeoById: (id) => `*[_type == "seo" && _id == "${id}"][0]`,
                
              getStickysidebars: `*[_type == "stickySidebar"]`,
              getStickysidebarById: (id) => `*[_type == "stickySidebar" && _id == "${id}"][0]`,
                
              getTextimages: `*[_type == "textImage"]`,
              getTextimageById: (id) => `*[_type == "textImage" && _id == "${id}"][0]`,
                
              getBasicforms: `*[_type == "basicForm"]`,
              getBasicformById: (id) => `*[_type == "basicForm" && _id == "${id}"][0]`,
                
              getContactcardss: `*[_type == "contactCards"]`,
              getContactcardsById: (id) => `*[_type == "contactCards" && _id == "${id}"][0]`,
                
              getContactcards: `*[_type == "contactCard"]`,
              getContactcardById: (id) => `*[_type == "contactCard" && _id == "${id}"][0]`,
                
              getBasicdarks: `*[_type == "basicDark"]`,
              getBasicdarkById: (id) => `*[_type == "basicDark" && _id == "${id}"][0]`,
                
              getBasiclights: `*[_type == "basicLight"]`,
              getBasiclightById: (id) => `*[_type == "basicLight" && _id == "${id}"][0]`,
                
              getBasics: `*[_type == "basic"]`,
              getBasicById: (id) => `*[_type == "basic" && _id == "${id}"][0]`,
                
              getFaqstickys: `*[_type == "faqSticky"]`,
              getFaqstickyById: (id) => `*[_type == "faqSticky" && _id == "${id}"][0]`,
                
              getFaqs: `*[_type == "faq"]`,
              getFaqById: (id) => `*[_type == "faq" && _id == "${id}"][0]`,
                
              getFeaturecardss: `*[_type == "featureCards"]`,
              getFeaturecardsById: (id) => `*[_type == "featureCards" && _id == "${id}"][0]`,
                
              getFeaturecards: `*[_type == "featureCard"]`,
              getFeaturecardById: (id) => `*[_type == "featureCard" && _id == "${id}"][0]`,
                
              getFeaturelists: `*[_type == "featureList"]`,
              getFeaturelistById: (id) => `*[_type == "featureList" && _id == "${id}"][0]`,
                
              getFeatureitems: `*[_type == "featureItem"]`,
              getFeatureitemById: (id) => `*[_type == "featureItem" && _id == "${id}"][0]`,
                
              getFeaturestickys: `*[_type == "featureSticky"]`,
              getFeaturestickyById: (id) => `*[_type == "featureSticky" && _id == "${id}"][0]`,
                
              getHomectas: `*[_type == "homeCTA"]`,
              getHomectaById: (id) => `*[_type == "homeCTA" && _id == "${id}"][0]`,
                
              getHighlightrowss: `*[_type == "highlightRows"]`,
              getHighlightrowsById: (id) => `*[_type == "highlightRows" && _id == "${id}"][0]`,
                
              getHighlightrows: `*[_type == "highlightRow"]`,
              getHighlightrowById: (id) => `*[_type == "highlightRow" && _id == "${id}"][0]`,
                
              getSignups: `*[_type == "signUp"]`,
              getSignupById: (id) => `*[_type == "signUp" && _id == "${id}"][0]`,
                
              getPricingcolumnss: `*[_type == "pricingColumns"]`,
              getPricingcolumnsById: (id) => `*[_type == "pricingColumns" && _id == "${id}"][0]`,
                
              getPricingplans: `*[_type == "pricingPlan"]`,
              getPricingplanById: (id) => `*[_type == "pricingPlan" && _id == "${id}"][0]`,
                
              getBasicfeeds: `*[_type == "basicFeed"]`,
              getBasicfeedById: (id) => `*[_type == "basicFeed" && _id == "${id}"][0]`,
                
              getFeeditems: `*[_type == "feedItem"]`,
              getFeeditemById: (id) => `*[_type == "feedItem" && _id == "${id}"][0]`,
                }
