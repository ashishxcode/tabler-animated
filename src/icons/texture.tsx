"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 3l-3 3"}],["path",{"d":"M21 18l-3 3"}],["path",{"d":"M11 3l-8 8"}],["path",{"d":"M16 3l-13 13"}],["path",{"d":"M21 3l-18 18"}],["path",{"d":"M21 8l-13 13"}],["path",{"d":"M21 13l-8 8"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.5,4.5],[19.5,19.5],[7,7],[9.5,9.5],[14.5,14.5],[17,17]]}];

export const TextureIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextureIcon.displayName = "TextureIcon";
