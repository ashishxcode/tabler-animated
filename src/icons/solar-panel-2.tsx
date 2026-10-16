"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 2a4 4 0 1 0 8 0"}],["path",{"d":"M4 3h1"}],["path",{"d":"M19 3h1"}],["path",{"d":"M12 9v1"}],["path",{"d":"M17.2 7.2l.707 .707"}],["path",{"d":"M6.8 7.2l-.7 .7"}],["path",{"d":"M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243"}],["path",{"d":"M4 17h16"}],["path",{"d":"M10 13l-1 8"}],["path",{"d":"M14 13l1 8"}]];
const rig: Rig[] = [{"fx":"pop","n":[6,7],"o":[12,17],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,8,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,4],[4.5,3],[19.5,3],[12,9.5],[17.55,7.55],[6.45,7.55],[9.5,17],[14.5,17]]}];

export const SolarPanel2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SolarPanel2Icon.displayName = "SolarPanel2Icon";
