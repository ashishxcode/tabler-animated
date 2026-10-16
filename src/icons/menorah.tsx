"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 4v16"}],["path",{"d":"M8 4v2a4 4 0 1 0 8 0v-2"}],["path",{"d":"M4 4v2a8 8 0 1 0 16 0v-2"}],["path",{"d":"M10 20h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7],[12,20]]}];

export const MenorahIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MenorahIcon.displayName = "MenorahIcon";
