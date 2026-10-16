"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.007 7.54a5.965 5.965 0 0 0 -4.008 -1.54a6 6 0 0 0 -5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4 -1.536"}],["path",{"d":"M12 20v-2"}],["path",{"d":"M12 6v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[11.01,12],"a":0.14}];

export const CurrencyCentIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyCentIcon.displayName = "CurrencyCentIcon";
