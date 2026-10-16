"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.68 6.733a1 1 0 0 1 -.68 .267h-2a1 1 0 0 1 -1 -1v-2c0 -.276 .112 -.527 .293 -.708"}],["path",{"d":"M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M20.72 20.693a1 1 0 0 1 -.72 .307h-2a1 1 0 0 1 -1 -1v-2c0 -.282 .116 -.536 .304 -.718"}],["path",{"d":"M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M5 7v10"}],["path",{"d":"M19 7v8"}],["path",{"d":"M9 5h8"}],["path",{"d":"M7 19h10"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[18.86,19.14],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.84,5.15],[19,5],[5,19],[5,12],[19,11],[13,5],[12,19]]}];

export const VectorOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VectorOffIcon.displayName = "VectorOffIcon";
