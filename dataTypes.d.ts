// types.d.ts

/**
 * Interface for Hero Slice Primary Fields
 */
export interface HeroSliceDefaultPrimary {
    /**
     * First Name field in Hero → Primary
     *
     * - Field Type: string
     * - Placeholder: None
     */
    first_name: string;
  
    /**
     * Last Name field in Hero → Primary
     *
     * - Field Type: string
     * - Placeholder: None
     */
    last_name: string;
  
    /**
     * Tag Line field in Hero → Primary
     *
     * - Field Type: string
     * - Placeholder: None
     */
    tag_line: string;
  }
  
  /**
   * Interface for Hero Slice
   */
  export interface HeroSlice {
    /**
     * Slice Type
     */
    slice_type: string;
  
    /**
     * Slice Variation
     */
    variation: string;
  
    /**
     * Primary Fields
     */
    primary: HeroSliceDefaultPrimary;
  }
  