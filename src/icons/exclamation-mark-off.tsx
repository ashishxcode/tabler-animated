"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 19v.01"}],["path",{"d":"M12 15v-3m0 -4v-3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,19.01],"a":0.4,"dl":0.12},{"fx":"pop","n":[1],"o":[12,10],"a":0.25,"dl":0.1}];

export const ExclamationMarkOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExclamationMarkOffIcon.displayName = "ExclamationMarkOffIcon";
