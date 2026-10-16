"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7v-1a2 2 0 0 1 2 -2h2"}],["path",{"d":"M4 17v1a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v1"}],["path",{"d":"M16 20h2a2 2 0 0 0 2 -2v-1"}],["path",{"d":"M5 11h1v2h-1l0 -2"}],["path",{"d":"M10 11l0 2"}],["path",{"d":"M14 11h1v2h-1l0 -2"}],["path",{"d":"M19 11l0 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[4,5,6,7],"a":0.22,"dl":0.1,"st":0.07,"os":[[5.5,12],[10,12],[14.5,12],[19,12]]}];

export const BarcodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BarcodeIcon.displayName = "BarcodeIcon";
