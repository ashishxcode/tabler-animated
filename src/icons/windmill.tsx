"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9"}],["path",{"d":"M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9"}],["path",{"d":"M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9"}],["path",{"d":"M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06}];

export const WindmillIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WindmillIcon.displayName = "WindmillIcon";
