"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"}],["path",{"d":"M4 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8"}],["path",{"d":"M10 14h4"}],["path",{"d":"M12 12v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,14],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,6],[12,14],[12,14]]}];

export const FirstAidKitIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FirstAidKitIcon.displayName = "FirstAidKitIcon";
