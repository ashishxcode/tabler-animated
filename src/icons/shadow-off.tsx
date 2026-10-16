"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088"}],["path",{"d":"M16 12h2"}],["path",{"d":"M13 15h2"}],["path",{"d":"M13 18h1"}],["path",{"d":"M13 9h4"}],["path",{"d":"M13 6h1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2,3],"o":[14,16.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12.03,11.97],"a":0.06},{"fx":"pop","n":[1,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,12],[15,9],[13.5,6]]}];

export const ShadowOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShadowOffIcon.displayName = "ShadowOffIcon";
