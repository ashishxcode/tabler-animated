"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21v-4"}],["path",{"d":"M12 13v-4"}],["path",{"d":"M12 5v-2"}],["path",{"d":"M10 21h4"}],["path",{"d":"M8 5v4h11l2 -2l-2 -2l-11 0"}],["path",{"d":"M14 13v4h-8l-2 -2l2 -2l8 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[12.5,11],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,19],[12,11],[12,4],[12,21]]}];

export const DirectionsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DirectionsIcon.displayName = "DirectionsIcon";
