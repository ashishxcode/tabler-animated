"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M12 21c-3.314 0 -6 -2.462 -6 -5.5s2.686 -5.5 6 -5.5"}],["path",{"d":"M21 12c0 3.314 -2.462 6 -5.5 6s-5.5 -2.686 -5.5 -6"}],["path",{"d":"M12 14c3.314 0 6 -2.462 6 -5.5s-2.686 -5.5 -6 -5.5"}],["path",{"d":"M14 12c0 -3.314 -2.462 -6 -5.5 -6s-5.5 2.686 -5.5 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12]]}];

export const WhirlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WhirlIcon.displayName = "WhirlIcon";
