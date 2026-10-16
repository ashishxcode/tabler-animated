"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08"}],["path",{"d":"M12 3v4"}],["path",{"d":"M12 21v-3"}],["path",{"d":"M3 12h4"}],["path",{"d":"M21 12h-3"}],["path",{"d":"M12 12v.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[11.98,12.02],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[12,19.5],[5,12],[19.5,12],[12,12.01]]}];

export const ViewfinderOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ViewfinderOffIcon.displayName = "ViewfinderOffIcon";
