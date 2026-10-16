"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5"}],["path",{"d":"M2 13.5v5.5l5 3"}],["path",{"d":"M7 16.545l5 -3.03"}],["path",{"d":"M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5"}],["path",{"d":"M12 19l5 3"}],["path",{"d":"M17 16.5l5 -3"}],["path",{"d":"M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5"}],["path",{"d":"M7 5.03v5.455"}],["path",{"d":"M12 8l5 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3,6],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,4,5,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.5,17.75],[9.5,15.03],[14.5,20.5],[19.5,15],[7,7.76],[14.5,6.5]]}];

export const PackagesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PackagesIcon.displayName = "PackagesIcon";
