"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 8h-4v8h4"}],["path",{"d":"M10 12h2.5"}]];
const rig: Rig[] = [{"fx":"wave","n":[1],"st":0.13,"os":[[11.25,12]]}];

export const SignalEIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SignalEIcon.displayName = "SignalEIcon";
