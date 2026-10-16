"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20h3"}],["path",{"d":"M14 20h6"}],["path",{"d":"M6.9 15h6.9"}],["path",{"d":"M13 13l3 7"}],["path",{"d":"M5 20l4.09 -10.906"}],["path",{"d":"M10.181 6.183l.819 -2.183h2l3.904 8.924"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1,3],"o":[16.5,16.5],"a":0.35,"dl":0.2},{"fx":"draw","n":[2,4,5],"o":[10.95,12],"st":0.07}];

export const TypographyOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TypographyOffIcon.displayName = "TypographyOffIcon";
