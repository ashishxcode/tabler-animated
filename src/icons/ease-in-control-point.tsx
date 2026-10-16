"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19c8 0 18 -16 18 -16"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M17 19h-2"}],["path",{"d":"M12 19h-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,19],[16,19],[11,19]]}];

export const EaseInControlPointIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EaseInControlPointIcon.displayName = "EaseInControlPointIcon";
