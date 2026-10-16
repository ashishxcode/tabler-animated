"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 11l6 -6"}],["path",{"d":"M4 15a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M19 9v-4h-4"}],["path",{"d":"M16.5 10.5l-3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[9,15],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,8],[17,7],[15,9]]}];

export const GenderAndrogyneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GenderAndrogyneIcon.displayName = "GenderAndrogyneIcon";
